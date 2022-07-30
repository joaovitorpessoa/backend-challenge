import QuestionEntity from "@domain/entities/question.entity";

type ListQuestionsOutputBoundary = Promise<QuestionEntity[]>;

export default ListQuestionsOutputBoundary;
