import express from "express";
import userController from "../controller/userController.js";

const router = express.Router();

router.post('/api/user', userController.registerUser)

router.get('/api/users', userController.allUsers)

router.post('/api/login', userController.loginUser)


export default router;