import { DataSourceOptions } from "typeorm";

import QuestionEntity from "@infra/orm/typeorm/entities/question.entity";
import QuestionMigration from "@infra/orm/typeorm/database/migrations/1658910260981-Question.migration";
import postgresConnectionConfig from "./database/postgres-connection.config";
import sqliteConnectionConfig from "./database/sqlite-connection.config";

const typeormStaticConfig = {
  entities: [QuestionEntity],
  migrations: [QuestionMigration],
};

const postgresConfig: DataSourceOptions = {
  type: "postgres",
  host: postgresConnectionConfig.host,
  port: postgresConnectionConfig.port,
  username: postgresConnectionConfig.user,
  password: postgresConnectionConfig.password,
  database: postgresConnectionConfig.db_name,
  ...typeormStaticConfig,
};

const sqliteConfig: DataSourceOptions = {
  type: "sqlite",
  database: sqliteConnectionConfig.path,
  ...typeormStaticConfig,
};

const config =
  process.env.FREE_HEROKU_ENVIRONMENT === "true"
    ? sqliteConfig
    : postgresConfig;

export default config;
