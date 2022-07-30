import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateQuestionUseCase from "@features/faq/usecases/create-question/create-question.usecase";

class CreateQuestionController {
  public async handle(req: Request, res: Response) {
    const data = req.body;
    const createQuestionUseCase = container.resolve(CreateQuestionUseCase);
    await createQuestionUseCase.execute(data);
    return res.status(201).send();
  }
}

export default new CreateQuestionController();
