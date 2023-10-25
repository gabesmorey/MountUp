import express, { Request, Response, NextFunction, Router } from "express";
import { getUserByUsername, insertNewUser } from "../mongo/user";
import { MongoInsertError } from "../errors/mongo";
import { BadRequestError, UnauthorizedError } from "../errors/user";
import { Me } from "../models/me";
import * as bcrypt from "bcrypt";
import { isAdmin, isLoggedIn } from "../middleware/auth";

const router: Router = express.Router();

router.get("/ping", async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("sess: ", req.session);

    if (req.session.Me) {
      console.log("Me: ", req.session.Me);
    } else {
      let me = new Me();
      me.isAdmin = true;
      me.username = "phelpsandrew";
      req.session.Me = me;
    }

    res.json("done");
  } catch (err) {
    next(err);
  }
});

router.post(
  "/create",
  async (req: Request, res: Response, next: NextFunction) => {
    let username = req.body.username;
    let password = req.body.password;
    let birthday = req.body.birthday;

    try {
      if (req.session.Me && req.session.Me.isAdmin) {
        if (username && username.length > 0) {
          if (password && password.length > 0) {
            let newUser = await insertNewUser(
              username,
              password,
              new Date(birthday)
            );
            if (newUser) {
              res.json(newUser);
            } else {
              //res.json("Something went wrong when creating your user account");
              throw new MongoInsertError(
                "Something went wrong when creating your user account"
              );
            }
          } else {
            //res.json("You need to send a valid password");
            throw new BadRequestError("You need to send a valid password");
          }
        } else {
          //res.json("You need to send a valid username");
          throw new BadRequestError("You need to send a valid username");
          //throw new MongoInsertError("Something went wrong when creating your user account");
        }
      } else {
        //res.json("You need to be authenticated for this route");
        throw new UnauthorizedError(
          "You need to be authenticated for this route"
        );
      }
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    let username = req.body.username;
    let password = req.body.password;

    if (username && username.length > 0) {
      if (password && password.length > 0) {
        let user = await getUserByUsername(username);
        if (user) {
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
              res.json("Your username/password is incorrect");
            }
            if (result && user) {
              let me = new Me();
              me.isAdmin = true;
              me.username = username;
              me._id = user._id;
              req.session.Me = me;
              res.json("You successfully logged in");
            } else {
              res.json("Your username/password is incorrect");
            }
          });
        } else {
          res.json("Your username/password is incorrect");
        }
      } else {
        res.json("You need to send a valid password");
      }
    } else {
      res.json("You need to send a valid username");
    }
  }
);

router.get(
  "/logout",
  isLoggedIn,
  async (req: Request, res: Response, next: NextFunction) => {
    req.session.destroy(() => {
      res.json("You've been logged out");
    });
  }
);

export default router;
