import { IConfig } from "./config.interface";

export const defaults: IConfig = {
  app: {
    name: "APP-NAME",
    port: 3002,
    superAdmin: { username: "super_admin", password: "meetingAppPassword" },
  },
  db: {
    host: "localhost",
    name: "videoranDB",
    port: 5432,
    username: "maxsusi",
    password: "P@ssw0rd++",
  },
  jwt: {
    secret: "simple-secret",
    accessTtl: "1d",
    refreshTtl: "7d",
  },
};
