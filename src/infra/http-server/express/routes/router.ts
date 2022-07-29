import { Router } from "express";

import faqRoutes from "./faq.routes";

const router = Router();

router.use("/faq", faqRoutes);

export default router;
