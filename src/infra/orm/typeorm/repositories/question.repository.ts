import { DataSource, Repository } from "typeorm";
import { container } from "tsyringe";

import CreateQuestionDTO from "@features/faq/dto/create-question.dto";
import QuestionRepository from "@features/faq/repositories/question.repository";
import injectionTokens from "@shared/constants/injection-tokens.const";
import QuestionEntity from "../entities/question.entity";

class QuestionRepositoryTypeorm implements QuestionRepository {
  private dataSource: DataSource;
  private repository: Repository<QuestionEntity>;

  constructor() {
    this.dataSource = container.resolve(injectionTokens.DATA_SOURCE);
    this.repository = this.dataSource.getRepository(QuestionEntity);
  }

  async create(data: CreateQuestionDTO): Promise<void> {
    const question = this.repository.create(data);
    await this.repository.save(question);
  }

  async findAll(): Promise<object[]> {
    const allQuestions = await this.repository.find();
    return allQuestions;
  }
}

export default QuestionRepositoryTypeorm;
