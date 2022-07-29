import { inject, injectable } from "tsyringe";

import QuestionRepository from "@features/faq/repositories/question.repository";
import injectionTokens from "@shared/constants/injection-tokens.const";

@injectable()
class ListQuestionsUseCase {
  private repository: QuestionRepository;

  constructor(
    @inject(injectionTokens.QUESTION_REPOSITORY)
    repository: QuestionRepository
  ) {
    this.repository = repository;
  }

  async execute() {
    const allQuestions = await this.repository.findAll();
    return allQuestions;
  }
}

export default ListQuestionsUseCase;
