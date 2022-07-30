import { container } from "tsyringe";

import injectionTokens from "@shared/constants/injection-tokens.const";
import DependencyInjectionProvider from "@shared/types/di-provider";
import CreatePostgresConnection from "./postgres-connection";

class DatabaseProvider implements DependencyInjectionProvider {
  async register(): Promise<void> {
    const createPostgresConnection = new CreatePostgresConnection();
    const postgresConnection = await createPostgresConnection.init();
    container.registerInstance(
      injectionTokens.DATABASE_CONNECTION,
      postgresConnection
    );
  }
}

export default new DatabaseProvider();
