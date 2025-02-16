import express from "express";
import router from "./routes.js";

const app = express();

//indicar para o express ler body como json
app.use(express.json());

//user o router
app.use(router);

export default app;
