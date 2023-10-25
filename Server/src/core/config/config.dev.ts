import { Config } from "./types";

const config: Config = {
  mongo: {
    host: "localhost",
    port: "27017",
    database: "Sports",
  },
  server: {
    secret: "LKSDJfoij323o5ij4LSDJFoi2345",
    mongoConnect: "mongodb://127.0.0.1:27017/Sports",
  },
};

export default config;
