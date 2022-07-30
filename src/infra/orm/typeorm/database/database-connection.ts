import { DataSource as DatabaseDataSource } from "typeorm";
import { singleton } from "tsyringe";

import typeormConfig from "@shared/config/typeorm.config";

@singleton()
class DatabaseConnection {
  async init() {
    const databaseDataSource = new DatabaseDataSource(typeormConfig);
    const connection = await databaseDataSource.initialize();
    return connection;
  }
}

export default DatabaseConnection;
