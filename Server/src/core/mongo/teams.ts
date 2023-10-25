import { ObjectId } from "mongodb";
import { MongoInsertError } from "../errors/mongo";
import { getDb } from "../utils/mongohelper";
import { BasketballTeam, Team } from "../models/teams";

export const insertNewTeam = async (
  school: string,
  sport: string,
  games: number,
  conferenceRecord: string,
  overallRecord: string,
  stats: {}
): Promise<Team> => {
  return new Promise(async (resolve, reject) => {
    try {
      let db = await getDb();
      const collection = await db.collection<Team>(sport);

      const newTeam = new Team();
      newTeam.school = school;
      newTeam.sport = sport;
      newTeam.games = games;
      newTeam.conferenceRecord = conferenceRecord;
      newTeam.overallRecord = overallRecord;
      newTeam.stats = stats;

      const result = await collection.insertOne(newTeam);

      if (result.acknowledged) {
        newTeam._id = result.insertedId;
        resolve(newTeam);
      } else {
        throw new MongoInsertError(
          "Something went wrong while inserting a new user"
        );
      }
    } catch (err) {
      reject(err);
    }
  });
};

export const getTeamsBySport = async (): Promise<Team | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      let db = await getDb();
      const collection = await db.collection<Team>("baseball");

      const sport = "baseball";

      const result = await collection.findOne({ sport });

      resolve(result);

      if (result) {
        resolve(result);
      } else {
        resolve(null);
      }
    } catch (err) {
      reject(err);
    }
  });
};
