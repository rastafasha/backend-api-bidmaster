import { Router } from "express";
import { authRequired } from "../middlewares/validatetoken.js";
import{
    createProjectType,
    getProjectType,
    getProjectTypes,
    updateProjectType,
    deleteProjectType,
    } from "../controllers/projectType.controller.js";

    
const router = Router()

router.get('/typeprojects',  authRequired, getProjectTypes);
router.get('/typeproject/:id',  authRequired, getProjectType);
router.post('/typeprojects/store',  
    authRequired, 
     createProjectType 
    );
router.delete('/typeprojects/delete/:id',  authRequired, deleteProjectType);
router.put('/typeprojects/update/:id',  authRequired, updateProjectType);

export default router;
