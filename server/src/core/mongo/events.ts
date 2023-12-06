import { ObjectId } from "mongodb";
import { MongoInsertError } from "../errors/mongo";
import { Event } from "../models/event"
import { getDb, ensureObjectId } from "../utils/mongohelper";

export const insertNewEvent = async(name: string, date: Date, location: string, team1: string, team2: string): Promise<Event> => {
    return new Promise(async(resolve, reject) => {
        try {
            let db = await getDb();
            const collection = await db.collection<Event>("events");
      
            const newEvent = new Event();
            newEvent.name = name;
            newEvent.date = date;
            newEvent.location = location;
            newEvent.team1 = team1;
            newEvent.team2 = team2;
      
            const result = await collection.insertOne(newEvent);
      
            if (result.acknowledged) {
              newEvent._id = result.insertedId;
              resolve(newEvent);
            } else {
              throw new MongoInsertError(
                "Something went wrong while inserting a new team"
              );
            }
          } catch (err) {
            reject(err);
          }
    })
}

export const getAllEvents = async (): Promise<Event[]> => {
    return new Promise(async (resolve, reject) => {
      try {
        let db = await getDb();
        const collection = await db.collection<Event>("events");
  
        const result = await collection.find().toArray();
  
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };
