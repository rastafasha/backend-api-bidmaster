import { Router } from "express";
import { authRequired } from "../middlewares/validatetoken.js";
import{
    getUser,
    getUsers,
    deleteUser,
    updateUser
    } from "../controllers/user.controller.js";

import {validateSchema} from '../middlewares/validator.middleware.js';
import { createTaskSchema } from '../schemas/task.schema.js';

const router = Router()

router.get('/users',   getUsers);
router.get('/user/:id',  authRequired, getUser);

router.delete('/users/delete/:id',  authRequired, deleteUser );
router.put('/users/update/:id',  authRequired, updateUser);

export default router;
