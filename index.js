import express from "express";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.log('안녕하세요 ?');
    console.log(req.body);
})

app.listen(4001, () => {
    console.log('http://localhost:4001');
})