import express from "express";
import * as noticeController from "../controllers/noticeController.js";

const router = express.Router();

router.post('/create', noticeController.create);
router.get('/', noticeController.read);
router.get('/:_id', noticeController.readOne);
router.patch('/:_id/update', noticeController.update);
router.delete('/:_id/delete', noticeController.noticeDelete);

export default router;