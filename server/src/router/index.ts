import express from "express";
import { productsRouter } from "./productsRouter";
import { basketRouter } from "./basketRouter";
export const router = express.Router()

router.use('/products', productsRouter )
router.use('/basket', basketRouter )