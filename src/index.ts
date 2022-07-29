/* eslint-disable max-classes-per-file */

import setupEnvironment from "@shared/utils/env/setup-environment";
import HttpServer from "@infra/http-server/express/server";

async function main() {
  await setupEnvironment();

  const server = new HttpServer();
  server.init();
}

main();
