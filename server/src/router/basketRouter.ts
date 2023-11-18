import express from "express";

const basketRouter = express.Router();

basketRouter.get("/"),
    (
        _req: any,
        res: {
            json(arg0: { message: string }): unknown;
        }
    ) => {
        res.json({ message: "basket" });
    };
export { basketRouter };
