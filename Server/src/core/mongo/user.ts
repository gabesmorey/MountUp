import { ObjectId } from "mongodb";
import { MongoInsertError } from "../errors/mongo";
import { User } from "../models/user";
import { getDb } from "../utils/mongohelper";
import * as bcrypt from "bcrypt";

export const insertNewUser = async (
  username: string,
  password: string,
  birthday: Date
): Promise<User> => {
  return new Promise(async (resolve, reject) => {
    try {
      let db = await getDb();
      const collection = await db.collection<User>("users");

      bcrypt.hash(password, 10, async (err, hash) => {
        const newUser = new User();
        newUser.username = username;
        newUser.password = hash;
        newUser.birthday = birthday;
        newUser.createAt = new Date();
        newUser.updatedAt = new Date();

        const result = await collection.insertOne(newUser);

        if (result.acknowledged) {
          newUser._id = result.insertedId;
          resolve(newUser);
        } else {
          throw new MongoInsertError(
            "Something went wrong while inserting a new user"
          );
        }
      });
    } catch (err) {
      reject(err);
    }
  });
};

export const getUserByUsername = async (
  username: string
): Promise<User | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      let db = await getDb();
      const collection = await db.collection<User>("users");

      const result = await collection.findOne({ username });

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
