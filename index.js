import express from "express";
import './db/db.js';
import dotenv from "dotenv";
import noticeRouter from "./routers/noticeRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/notice', noticeRouter);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})