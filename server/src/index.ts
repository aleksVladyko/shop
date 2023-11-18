import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import { router } from "./router/index";
import errorHandler from './middleware/ErrorMiddleware'

const port = process.env.PORT || 3003;
const app = express();
app.use(cors());
app.use(json());
app.use('/', router)
app.use(errorHandler)

// Добавляем заголовки CORS...
app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
const start = async () => {
    app.listen(port, () => {
        console.log(`Сервер слушает порт ${port}`);
    }).on("error", (error) => {
        console.error("Ошибка сервера:", error);
    });
};
start();
