import {Router} from "express";

const router = Router();

router.get("/", (_, res) => {
    res.render("index", {
        title: "Express + EJS + Tailwind v4.1",
        env: process.env.NAME
    });
});

export default router;

