export interface AppConfig {
  MONGO_DB_URL: string;
}

export const appConfig = {
  MONGO_DB_URL: process.env.MONGO_DB_URL as string,
};
