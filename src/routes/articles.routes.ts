import { Router } from "express";
import {
   getAllArticles,
   getArticleById,
} from "../controllers/article.controller";

const router = Router();
/**
 * @openapi
 * /articles:
 *   get:
 *     summary: Lista todos os artigos
 *     responses:
 *       200:
 *         description: Lista de artigos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Article'
 */
router.get("/", getAllArticles);
/**
 * @openapi
 * /articles/{id}:
 *   get:
 *     summary: Retorna um artigo pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do artigo
 *     responses:
 *       200:
 *         description: Artigo encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       404:
 *         description: Artigo não encontrado
 */
router.get("/:id", getArticleById);
export default router;
