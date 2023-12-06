import express, { Request, Response, NextFunction, Router } from "express";
import { MongoInsertError } from "../errors/mongo";
import { BadRequestError, UnauthorizedError } from "../errors/user";
import { isLoggedIn } from "../middleware/auth";
import { ensureObjectId } from "../utils/mongohelper";
import { getAllEvents, insertNewEvent } from "../mongo/events";

const router: Router = express.Router();

router.post(
    "/create",
    isLoggedIn,
    async (req: Request, res: Response, next: NextFunction) => {
      let name = req.body.name;
      let date = req.body.date;
      let location = req.body.location;
      let team1 = req.body.team1;
      let team2 = req.body.team2;
  
      try{
        if (name && name.length > 0) {
          if (date && date.length > 0) {
            let newEvent = await insertNewEvent(name, date, location, team1, team2);
    
            if (newEvent) {
              res.json(newEvent);
            } else {
              throw new MongoInsertError(
                "There was an error creating the new event"
              );
            }
          } else {
            throw new BadRequestError("You need to send a valid date");
          }
        } else {
          throw new BadRequestError("You must enter a valid name");
        }
      } catch(err){
        next(err);
      }
    }
  );

  router.get(
    "/all",
    isLoggedIn,
    async (req: Request, res: Response, next: NextFunction) => {
      try{
        const events = await getAllEvents();
    
        res.json(events);
      } catch(err){
        next(err);
      }
    }
  );

  export default router;
