import express, { Request, Response, NextFunction, Router } from "express";
import { addFollowing, getFollowedTeams, getUserByUsername, insertNewUser, unfollowTeam } from "../mongo/user";
import { MongoInsertError } from "../errors/mongo";
import { BadRequestError, UnauthorizedError } from "../errors/user";
import { Me } from "../models/me";
import * as bcrypt from "bcrypt";
import { isLoggedIn } from "../middleware/auth";
import { ensureObjectId } from "../utils/mongohelper";

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

router.post("/create", async (req: Request, res: Response, next: NextFunction) => {
    let username = req.body.username;
    let password = req.body.password;
    let birthday = req.body.birthday;

    try {
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
    } catch (err) {
      next(err);
    }
  }
);

router.post("/login", async (req: Request, res: Response, next: NextFunction) => {
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
            res.json(me);
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
});

router.get("/logout", isLoggedIn, async (req: Request, res: Response, next: NextFunction) => {
  req.session.destroy(() => {
      res.json("You've been logged out");
    });
});

router.post("/follow", isLoggedIn, async(req: Request, res: Response, next: NextFunction) => {
  const username = req.session.Me?.username;
  const sport = req.body.sport;
  const teamId = req.body.teamId;

  try{
    if(username){
      if(teamId){
        const result = await addFollowing(username, ensureObjectId(teamId));

        res.json(result);
      } else{
        throw new BadRequestError("You must enter a valid team id");
      }
    } else{
      throw new UnauthorizedError("You must be logged in to follow a team");
    }
  } catch(err){
    next(err);
  }
});

router.get("/following", isLoggedIn, async(req: Request, res: Response, next: NextFunction) => {
  const username = req.session.Me?.username;

  try{
    if(username){
      const result = await getFollowedTeams(username);

      res.json(result);
    } else{
      throw new UnauthorizedError("You must be logged in to see the teams you're following");
    }
  } catch(err){
    next(err);
  }
})

router.delete("/unfollow", isLoggedIn, async(req: Request, res: Response, next: NextFunction) => {
  const username = req.session.Me?.username;
  const teamId = req.body.teamId;

  try{
    if(username){
      const result = await unfollowTeam(username, teamId);

      res.json(result);
    } else{
      throw new UnauthorizedError("You must be logged in to unfollow");
    }
  } catch(err){
    next(err);
  }
})

export default router;
