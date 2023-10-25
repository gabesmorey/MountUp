import express, { Request, Response, NextFunction, Router } from "express";
import { MongoInsertError } from "../errors/mongo";
import { BadRequestError, UnauthorizedError } from "../errors/user";
import { isLoggedIn } from "../middleware/auth";
import { getTeamsBySport, insertNewTeam } from "../mongo/teams";

const router: Router = express.Router();

router.post(
  "/create",
  isLoggedIn,
  async (req: Request, res: Response, next: NextFunction) => {
    let school = req.body.school;
    let sport = req.body.sport;
    let games = req.body.games;
    let conferenceRecord = req.body.conferenceRecord;
    let overallRecord = req.body.overallRecord;

    delete req.body.school;
    delete req.body.sport;
    delete req.body.games;
    delete req.body.conferenceRecord;
    delete req.body.overallRecord;

    let stats = req.body;

    if (school && school.length > 0) {
      if (sport && sport.length > 0) {
        let newTeam = await insertNewTeam(
          school,
          sport,
          games,
          conferenceRecord,
          overallRecord,
          stats
        );

        if (newTeam) {
          res.json(newTeam);
        } else {
          throw new MongoInsertError(
            "There was an error creating the new team"
          );
        }
      } else {
        throw new BadRequestError("You must enter a valid sport");
      }
    } else {
      throw new BadRequestError("You must enter a valid school");
    }
  }
);

router.get(
  "/teamsbysport",
  isLoggedIn,
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("Route works");

    const sport = req.query.sport;

    if (sport) {
      const teams = getTeamsBySport();

      res.json(teams);
    } else {
      throw new BadRequestError("You must enter a valid sport");
    }
  }
);

export default router;
