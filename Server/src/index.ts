import express, { Request, Response, NextFunction } from "express";
import * as http from "http";
import userRoutes from "./core/routes/user";
import sportsRoutes from "./core/routes/sports";
import bodyParser from "body-parser";
import session from "express-session";
import { Me } from "./core/models/me";
import config from "./core/config";
import { UserError } from "./core/errors/base";
import MongoStore from "connect-mongo";
import { User } from "./core/models/user";

interface MainOptions {
  port: number;
}

declare module "express-session" {
  interface SessionData {
    Me: Me;
  }
}

export async function main(options: MainOptions) {
  try {
    const app = express();

    const mongoStore = MongoStore.create({
      mongoUrl: config.server.mongoConnect,
    });

    const sess = session({
      secret: config.server.secret,
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false, maxAge: 60000000 },
      store: mongoStore,
    });

    app.use(sess);
    app.use(bodyParser.json({ limit: "5mb" }));
    app.use(bodyParser.urlencoded({ extended: false, limit: "5mb" }));

    app.use("/user", userRoutes);
    app.use("/sports", sportsRoutes);
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof UserError) {
        res.status(err.statusCode).send({ message: err.message });
      } else {
        res.status(500).send("A server error occured");
      }

      console.log("There was a problem with a server request", err.message);
    });

    const server = http.createServer(app);
    server.listen(options.port);
  } catch (err) {}
}

if (require.main === module) {
  const PORT = 7000;

  main({ port: PORT })
    .then(() => {
      console.log("start successfully");
    })
    .catch((err) => {
      console.log("Something went wrong: ", err);
    });
}
