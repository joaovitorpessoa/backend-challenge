import { Request, Response } from "express";
import { container } from "tsyringe";
import ListQuestionsUseCase from "@features/faq/usecases/list-questions/list-questions.usecase";
import paginate from "@shared/utils/pagination/paginate";

class ListQuestionsController {
  public async handle(req: Request, res: Response) {
    const createQuestionsUseCase = container.resolve(ListQuestionsUseCase);
    const questions = await createQuestionsUseCase.execute();

    const { page: paginationPage, limit: paginationLimit } = req.query;
    const data = {
      questions: paginate(questions, paginationPage, paginationLimit),
    };
    return res.json(data);
  }
}

export default new ListQuestionsController();
