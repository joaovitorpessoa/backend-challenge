import { Router } from "express";
import createQuestionController from "../controllers/faq/create-question.controller";
import listQuestionsController from "../controllers/faq/list-questions.controller";

const faqRoutes = Router();

faqRoutes.post("/", createQuestionController.handle);
faqRoutes.get("/", listQuestionsController.handle);

export default faqRoutes;
