import express from 'express'
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js'

const uesrRouter = express.Router();

uesrRouter.post('/register', registerUser)
uesrRouter.post('/login', loginUser)
uesrRouter.post('/admin', adminLogin)

export default uesrRouter