import { inject, injectable } from "tsyringe";

import QuestionRepository from "@features/faq/repositories/question.repository";
import injectionTokens from "@shared/constants/injection-tokens.const";
import OutputBoundary from "./boundaries/list-questions.output-boundary";

@injectable()
class ListQuestionsUseCase {
  private repository: QuestionRepository;

  constructor(
    @inject(injectionTokens.QUESTION_REPOSITORY)
    repository: QuestionRepository
  ) {
    this.repository = repository;
  }

  async execute(): Promise<OutputBoundary> {
    const allQuestions = await this.repository.findAll();
    return allQuestions;
  }
}

export default ListQuestionsUseCase;
