import databaseProvider from "@infra/orm/typeorm/database/database.di-provider";
import faqProvider from "@features/faq/faq.di-provider";
import Provider from "../types/di-provider";

const providers: Provider[] = [databaseProvider, faqProvider];

async function loadProviders() {
  await Promise.all(providers.map(async (provider) => provider.register()));
}

export default loadProviders;
