import "dotenv/config";
import { DataSource } from "typeorm";

import typeormConfig from "@shared/config/typeorm.config";

const dataSource = new DataSource(typeormConfig);

export default dataSource;
