import mongoose from "mongoose";
import { appConfig } from "../app.config";

class MongoDatabase {
  public connection: mongoose.Connection | null;

  constructor() {
    this.connection = null;
    this.connect();
  }

  async connect() {
    await mongoose.connect(appConfig.MONGO_DB_URL);
    this.connection = mongoose.connection;
  }

  async getConnection(): Promise<mongoose.Connection> {
    if (!this.connection) {
      await this.connect();
    }
    return this.connection as mongoose.Connection;
  }
}

const mongoDB = new MongoDatabase();

export default mongoDB;
