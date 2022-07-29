import { container } from "tsyringe";

import injectionTokens from "@shared/constants/injection-tokens.const";
import QuestionRepository from "@infra/orm/typeorm/repositories/question.repository";
import Provider from "@shared/di/interfaces/provider";

class FaqProvider implements Provider {
  register(): void {
    container.registerSingleton(
      injectionTokens.QUESTION_REPOSITORY,
      QuestionRepository
    );
  }
}

export default new FaqProvider();
