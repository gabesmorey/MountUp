import { MongoClient, Db, ObjectId } from "mongodb";
import config from "../config";

let mongoInstance: Db;

export const getDb = async (): Promise<Db> => {
  if (!mongoInstance) {
    const connectionString = `mongodb://127.0.0.1:27017`;

    const mongo = await MongoClient.connect(connectionString);
    mongoInstance = mongo.db(config.mongo.database);

    console.log("MongoDB made a new connection");
  }

  return mongoInstance;
};
