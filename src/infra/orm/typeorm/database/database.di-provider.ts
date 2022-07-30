import { container } from "tsyringe";

import injectionTokens from "@shared/constants/injection-tokens.const";
import DependencyInjectionProvider from "@shared/types/di-provider";
import DatabaseConnection from "./database-connection";

class DatabaseProvider implements DependencyInjectionProvider {
  async register(): Promise<void> {
    const createDatabaseConnection = new DatabaseConnection();
    const databaseConnection = await createDatabaseConnection.init();
    container.registerInstance(
      injectionTokens.DATABASE_CONNECTION,
      databaseConnection
    );
  }
}

export default new DatabaseProvider();
