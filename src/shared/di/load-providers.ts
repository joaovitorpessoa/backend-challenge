import databaseProvider from "@infra/orm/typeorm/database/database.provider";
import faqProvider from "@features/faq/faq.provider";
import Provider from "./interfaces/provider";

const providers: Provider[] = [databaseProvider, faqProvider];

async function loadProviders() {
  await Promise.all(providers.map(async (provider) => provider.register()));
}

export default loadProviders;
