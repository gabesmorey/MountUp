import { ObjectId } from "mongodb";

export class Event {
    _id: ObjectId = new ObjectId();
    name: string = "";
    date: Date = new Date();
    location: string = "";
    team1: string = "";
    team2: string = "";
}
