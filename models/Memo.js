import mongoose from "mongoose";

const memoSchema = mongoose.Schema( {
    name : {
        type: String,
        maxLength: 20
    },
    pwd : {
        type: String,
        maxLength: 300
    }
});

const Memo = mongoose.model("Memo", memoSchema);

export default Memo;