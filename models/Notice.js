import mongoose from "mongoose";

const noticeSchema = mongoose.Schema({

    title: {
        type: String,
        maxLength: 30,
        required: true
    },
    content: {
        type: String,
        maxLength: 300,
        required: true
    }
});

const Notice = mongoose.model('Notice', noticeSchema);

export default Notice;
