import { Options } from "swagger-jsdoc";
import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions: Options = {
   definition: {
      openapi: "3.0.3",
      info: {
         title: "API Articles",
         version: "1.0.0",
         description:
            "Documentação da API REST de Articles (Node.js + Express + MongoDB-Atlas)",
      },
      servers: [
         {
            url: "http://localhost:8080",
            description: "Servidor local",
         },
      ],
      components: {
         schemas: {
            Social: {
               type: "object",
               properties: {
                  icon: { type: "string", example: "/assets/x.svg" },
                  path: { type: "string", example: "https://..." },
               },
            },
            Author: {
               type: "object",
               properties: {
                  img_avatar: { type: "string", example: "/assets/avt.png" },
                  name: { type: "string", example: "Higor Braga" },
                  social: {
                     type: "array",
                     items: { $ref: "#/components/schemas/Social" },
                  },
               },
            },
            Article: {
               type: "object",
               properties: {
                  id: { type: "string", example: "1" },
                  type: { type: "string", example: "music" },
                  img_sm: { type: "string", example: "/assets/1-sm.png" },
                  img_lg: { type: "string", example: "/assets/1-lg.png" },
                  date: { type: "string", example: "2025-01-05" },
                  hour: { type: "string", example: "20:00" },
                  title: {
                     type: "string",
                     example: "Rock Legends Live Concert",
                  },
                  description: {
                     type: "string",
                     example: "Lorem ipsum dolor sit amet...",
                  },
                  author: {
                     type: "array",
                     items: { $ref: "#/components/schemas/Author" },
                  },
                  recommended: { type: "boolean", example: false },
               },
            },
         },
      },
   },
   apis: ["./src/routes/*.ts", "./src/controllers/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
