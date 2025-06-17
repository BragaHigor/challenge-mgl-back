import { Router } from "express";
import {
   getAllArticles,
   getArticleById,
} from "../controllers/article.controle";

const router = Router();
router.get("/", getAllArticles);
router.get("/:id", getArticleById);
export default router;
