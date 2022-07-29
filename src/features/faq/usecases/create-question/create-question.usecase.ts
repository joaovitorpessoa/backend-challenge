import { inject, injectable } from "tsyringe";

import QuestionRepository from "@features/faq/repositories/question.repository";
import injectionTokens from "@shared/constants/injection-tokens.const";
import InvalidQuestion from "@features/faq/errors/invalid-question";
import CreateQuestion from "@features/faq/interfaces/create-question";
import validateQuestion from "./validators/validate-question";

@injectable()
class CreateQuestionUseCase {
  private repository: QuestionRepository;

  constructor(
    @inject(injectionTokens.QUESTION_REPOSITORY)
    repository: QuestionRepository
  ) {
    this.repository = repository;
  }

  async execute(data: CreateQuestion) {
    const errors = validateQuestion(data);

    if (errors.length) {
      throw new InvalidQuestion(errors);
    }

    await this.repository.create(data);
  }
}

export default CreateQuestionUseCase;
