import express from "express";
import  ProductsController  from "../controllers/productsController";

const productsRouter = express.Router();
productsRouter.get("/", ProductsController.getAll );
productsRouter.get("/:id", ProductsController.getOne );

export { productsRouter };
