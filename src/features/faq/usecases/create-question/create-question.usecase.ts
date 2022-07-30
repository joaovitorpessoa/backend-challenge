import { inject, injectable } from "tsyringe";

import QuestionRepository from "@features/faq/repositories/question.repository";
import injectionTokens from "@shared/constants/injection-tokens.const";
import validateQuestion from "./validators/validate-question";
import InputBoundary from "./boundaries/create-question.input-boundary";
import InvalidQuestion from "./errors/invalid-question";

@injectable()
class CreateQuestionUseCase {
  private repository: QuestionRepository;

  constructor(
    @inject(injectionTokens.QUESTION_REPOSITORY)
    repository: QuestionRepository
  ) {
    this.repository = repository;
  }

  async execute(data: InputBoundary): Promise<void> {
    const errors = validateQuestion(data);

    if (errors.length) {
      throw new InvalidQuestion(errors);
    }

    await this.repository.create(data);
  }
}

export default CreateQuestionUseCase;
