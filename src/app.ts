import express from "express";
import path from "node:path";
import {fileURLToPath} from "node:url";
import homeRoute from "@/routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/static", express.static(path.join(__dirname, "../build/public")));

app.use("/", homeRoute);

