import { ObjectId } from "mongodb";

export class Team {
  _id: ObjectId = new ObjectId();
  school: string = "";
  sport: string = "";
  games: number = 0;
  conferenceRecord: string = "";
  overallRecord: string = "";
  schedule: Date[] = [];
  stats = {};
}

export class BasketballTeam extends Team {
  stats = {
    teamStats: {
      //Scoring
      points: 0,
      FGM: 0,
      FGA: 0,
      threeFGA: 0,
      threeFGM: 0,
      FTM: 0,
      FTA: 0,

      //Rebounds
      OReb: 0,
      DReb: 0,

      //Misc
      TOs: 0,
      AST: 0,
      BLK: 0,
      STL: 0,
    },
    opponentStats: {
      points: 0,
      FGA: 0,
      FGM: 0,
      threeFGA: 0,
      threeFGM: 0,
      FTM: 0,
      FTA: 0,
      OReb: 0,
      DReb: 0,
      TOs: 0,
    },
  };
}

export class BaseballTeam extends Team {
  stats = {
    overall: {
      batting: {
        AB: 0,
        R: 0,
        H: 0,
        secondB: 0,
        thridB: 0,
        HR: 0,
        RBI: 0,
        TB: 0,
        SLG: 0.0,
        BB: 0,
        HBP: 0,
        SO: 0,
        GDP: 0,
        OB: 0.0,
        SF: 0,
        SH: 0,
        SBATT: "",
        PO: 0,
        A: 0,
        E: 0,
        FLO: 0.0,
      },
      pitching: {
        ERA: 0.0,
        SHO: 0,
        SV: 0,
        IP: 0.0,
        H: 0,
        R: 0,
        ER: 0,
        BB: 0,
        SO: 0,
        secondB: 0,
        thirdB: 0,
        HR: 0,
        AB: 0,
        BAVG: 0.0,
        WP: 0,
        HBP: 0,
        BK: 0,
        SFA: 0,
        SHA: 0,
      },
      fielding: {
        C: 0,
        PO: 0,
        A: 0,
        E: 0,
        FLD: 0.0,
        DP: 0,
        SBA: 0,
        CSB: 0,
        SBAPercent: 0.0,
        PB: 0,
        CI: 0,
      },
    },
  };
}
