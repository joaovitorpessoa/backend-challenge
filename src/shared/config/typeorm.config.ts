import { DataSourceOptions } from "typeorm";

import QuestionEntity from "@infra/orm/typeorm/entities/question.entity";
import QuestionMigration from "@infra/orm/typeorm/database/migrations/1658910260981-Question.migration";
import postgresConnection from "./postgres.config";

const config: DataSourceOptions = {
  type: "postgres",
  host: postgresConnection.host,
  port: postgresConnection.port,
  username: postgresConnection.user,
  password: postgresConnection.password,
  database: postgresConnection.db_name,
  entities: [QuestionEntity],
  migrations: [QuestionMigration],
};

export default config;
