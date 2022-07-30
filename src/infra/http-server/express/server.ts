import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";

import httpServerConfig from "@shared/config/http-server.config";
import router from "./routes/router";
import errorHandler from "./middleware/error-handler.middleware";

class ExpressHttpServer {
  private server: Express;
  public httpPort: number = httpServerConfig.port;

  constructor() {
    this.server = express();
  }

  public init() {
    this.registerMiddleware();
    this.server.listen(this.httpPort, () => {
      // eslint-disable-next-line no-console
      console.log(`Server is running on port ${4000}!`);
    });
  }

  private registerMiddleware() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(router);

    // the error middleware must be the last one registered, 'cause of how Express handles routes
    this.server.use(errorHandler);
  }
}

export default ExpressHttpServer;
