import { RequestHandler } from "express";
import ArticleModel from "../models/articles.model";
import { getCache, setCache } from "../cache/cache";

export const getAllArticles: RequestHandler = async (_req, res, next) => {
   const key = "all_articles";
   const cached = getCache(key);
   if (cached) {
      res.json(cached);
      return;
   }
   try {
      const articles = await ArticleModel.find().lean();
      setCache(key, articles);
      res.json(articles);
   } catch (err) {
      next(err);
   }
};

export const getArticleById: RequestHandler = async (req, res, next) => {
   const { id } = req.params;
   const key = `article_${id}`;
   const cached = getCache(key);
   if (cached) {
      res.json(cached);
      return;
   }

   try {
      const article = await ArticleModel.findOne({ id }).lean();
      if (!article) {
         res.status(404).json({ error: "Not found" });
         return;
      }
      setCache(key, article);
      res.json(article);
   } catch (err) {
      next(err);
   }
};
