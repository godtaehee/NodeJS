import express from "express";
import mongoose from "mongoose";
import Memo from "./models/Memo.js";

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://root:root@firstnode.vymu2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => {
        console.log('Mongo Connected!');
    })
    .catch(err => console.log(err));



app.post('/api/memos/memo', (req, res) => {
    const memo = new Memo(req.body);
    console.log('?');
    memo.save()
        .then(() => {
            return res.status(200).json({
                "success" : "true"
            })
        })
        .catch(err => {
            console.log(err);
            return res.status(400).json( {
                "Fail" : "fail"
            })
        })

});

app.get('/', (req, res) => {
    console.log('??');
    res.send('fddfd');
})


app.listen(4001, () => {
    console.log('http://localhost:4001');
});