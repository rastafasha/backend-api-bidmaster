import { Router } from "express";
import { authRequired } from "../middlewares/validatetoken.js";
import{
    createProject,
    getProject,
    getProjects,
    updateProject,
    deleteProject,
    getProjectsByUser
    } from "../controllers/project.controller.js";

import {validateSchema} from '../middlewares/validator.middleware.js';
import { createProjectSchema } from '../schemas/project.schema.js';
const router = Router()

router.get('/projects',  authRequired, getProjects);
router.get('/projects/user/:id',  authRequired, getProjectsByUser);
router.get('/project/:id',  authRequired, getProject);
router.post('/projects/store',  
    authRequired, 
    validateSchema(createProjectSchema),
     createProject 
    );
router.delete('/projects/delete/:id',  authRequired, deleteProject);
router.put('/projects/update/:id',  authRequired, updateProject);

export default router;
