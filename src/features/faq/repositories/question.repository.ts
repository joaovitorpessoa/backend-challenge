import QuestionEntity from "@domain/entities/question.entity";
import CreateQuestionDto from "./dto/create-question.dto";

interface QuestionRepository {
  create(data: CreateQuestionDto): Promise<void>;
  findAll(): Promise<QuestionEntity[]>;
}

export default QuestionRepository;
