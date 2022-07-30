import { container } from "tsyringe";

import injectionTokens from "@shared/constants/injection-tokens.const";
import QuestionRepository from "@infra/orm/typeorm/repositories/question.repository";
import DependencyInjectionProvider from "@shared/types/di-provider";

class FaqProvider implements DependencyInjectionProvider {
  register(): void {
    container.registerSingleton(
      injectionTokens.QUESTION_REPOSITORY,
      QuestionRepository
    );
  }
}

export default new FaqProvider();
