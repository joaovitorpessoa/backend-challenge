import CreateQuestionDto from "../dto/create-question.dto";

interface QuestionRepository {
  create(data: CreateQuestionDto): Promise<void>;
  findAll(): Promise<object[]>;
}

export default QuestionRepository;
