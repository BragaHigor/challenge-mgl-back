import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import articleRoutes from "./routes/articles.routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(
   cors({
      origin: process.env.FRONTEND_URL,
   })
);
app.use(express.json());
app.use("/articles", articleRoutes);

app.get("/", (_req, res) => {
   res.send("API Articles OK");
});

app.use((err: any, _req: any, res: any, _next: any) => {
   console.error(err);
   res.status(500).json({ error: "Internal server error" });
});

mongoose
   .connect(process.env.MONGODB_URI!)
   .then(() => {
      console.log("✅ MongoDB Atlas conectado");
      app.listen(port, () => console.log(`🚀 Server rodando na porta ${port}`));
   })
   .catch((err) => {
      console.error("❌ Falha ao conectar no MongoDB Atlas", err);
   });
