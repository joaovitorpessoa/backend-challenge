import "reflect-metadata";
import "dotenv/config";
import loadProviders from "@shared/di/load-providers";

async function setupEnvironment() {
  await loadProviders();
}

export default setupEnvironment;
