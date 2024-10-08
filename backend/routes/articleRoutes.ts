import { Router } from "express"; 
import {createArticle} from "../controllers/articleController"
import { authenticate } from "../utils/userAuthenticate";

const router = Router();

router.post('/create/:courseId',authenticate,createArticle);


export default router;
