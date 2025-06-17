import mongoose from "mongoose";
import dotenv from "dotenv";
import ArticleModel from "../models/articles.model";
import mock from "../../utils/mock/db.json";

dotenv.config();

async function seed() {
   try {
      await mongoose.connect(process.env.MONGODB_URI!);
      console.log("✅ Conectado ao Atlas");

      await ArticleModel.deleteMany({});
      console.log("🗑  Coleção 'articles' limpa");

      await ArticleModel.insertMany(mock.articles);
      console.log(`🌱 Inseridos ${mock.articles.length} artigos`);

      process.exit(0);
   } catch (err) {
      console.error("❌ Erro no seed:", err);
      process.exit(1);
   }
}

seed();
