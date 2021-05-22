import Notice from "../models/Notice.js";

export const create = async(req, res) => {

    const notice = new Notice(req.body);

    if(!notice) {
        res.status(500).json({
            message: "Cannot found notice"
        });
    }

    try {

        await notice.save();
        res.status(200).json({
            success: true
        });

    }catch (err) {
        res.status(500).json({
            message: err
        });
    }

};

export const read = async (req, res) => {

    try {
        const notices = await Notice.find();

        if(!notices) {
            res.status(500).json({
                message: "can not find notices!"
            });
        }

        res.status(200).json({
            notices
        });

    }catch (err)  {

        res.status(500).json({
            message: err
        });

    }

};

export const readOne = async (req, res) => {

    try {

        const {_id} = req.params;

        const notice = await Notice.findById( { _id });

        if(!notice) {
            res.status(500).json({
                message: "Cannot found notice !"
            });
        }

        res.status(200).json( {
            notice
        });

    }catch (err) {

        res.status(500).json({
            message: err
        });

    }

};

export const update = async  (req, res) => {

    try {
        const {_id} = req.params;
        const {title, content} = req.body;

        await Notice.findByIdAndUpdate( {_id} , {
            title,
            content
        });

    } catch(err) {
        res.status(500).json({
            message: err
        });
    }

};

export const noticeDelete = async (req, res) => {

    const { _id } = req.params;

    await Notice.findByIdAndDelete( {_id} );

    res.status(200).json({
        message: "삭제 성공 !"
    });

};
