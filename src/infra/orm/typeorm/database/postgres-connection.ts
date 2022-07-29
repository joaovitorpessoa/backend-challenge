import { DataSource as PostgresDataSource } from "typeorm";
import { singleton } from "tsyringe";

import typeormConfig from "@shared/config/typeorm.config";

@singleton()
class CreatePostgresConnection {
  async init() {
    const postgresDataSource = new PostgresDataSource(typeormConfig);
    const connection = await postgresDataSource.initialize();
    return connection;
  }
}

export default CreatePostgresConnection;
