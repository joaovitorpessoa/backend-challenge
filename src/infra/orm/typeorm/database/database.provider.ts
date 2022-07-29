import { container } from "tsyringe";

import injectionTokens from "@shared/constants/injection-tokens.const";
import Provider from "@shared/di/interfaces/provider";
import CreatePostgresConnection from "./postgres-connection";

class DatabaseProvider implements Provider {
  async register(): Promise<void> {
    const createPostgresConnection = new CreatePostgresConnection();
    const postgresConnection = await createPostgresConnection.init();
    container.registerInstance(injectionTokens.DATA_SOURCE, postgresConnection);
  }
}

export default new DatabaseProvider();
