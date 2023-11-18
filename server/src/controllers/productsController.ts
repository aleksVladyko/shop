import { Request, Response } from "express";
import db from "../db";
import ApiError from "../error/ApiError";

class ProductsController {
    async getAll(req: any, res: any) {
        let { limit, page } = req.query;
        const totalCount = Number(db.products.length);
        const totalPages = Math.ceil(totalCount / limit);
        let offset = Number(page - 1) * Number(limit);
        const end = Number(offset) + Number(limit);
        // Если значения limit или page не установлены, вернуть все данные из базы данных
        if (!limit || !page) {
            try {
                // Получаем все данные из базы данных
                const products = db.products;
                // Возвращаем данные в виде ответа JSON
                res.status(200);
                return res.json({ products, totalPages });
            } catch (error) {
                console.error("Ошибка получения данных из базы данных:", error);
                res.status(500).json({
                    error: "Произошла ошибка при получении данных",
                });
            }
        }
        // Если значения limit и page установлены, продолжаем существующую логику
        try {
            // Получаем данные из базы данных с учетом пагинации
            const products = db.products.slice(offset, end);

            // Возвращаем данные в виде ответа JSON
            res.status(200);

            return res.json({ products, totalPages });
        } catch (error) {
            console.error("Ошибка получения данных из базы данных:", error);
            res.status(500).json({
                error: "Произошла ошибка при получении данных",
            });
        }
    }
    async getOne(req: Request, res: Response, next: any) {
        const { id } = req.params;
        let productId;

        if (!id) {
            return next(ApiError.badRequest("не задан ID"));
        }
        productId = db.products.find((product) => product.id === Number(id));
        return res.json(productId);
    }
}
export default new ProductsController();
