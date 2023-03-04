import { Request, Response, Router } from "express";
import { delete_Subject,get_Subject,get_Subjects,post_Subject, update_Subject } from "../controllers/subject";

const router=Router();

router.get("/all",get_Subjects);
router.get("/:idSubject",get_Subject);
router.post("/",post_Subject);
router.put("/:idSubject",update_Subject);
router.delete("/:idSubject",delete_Subject);

export{router};
