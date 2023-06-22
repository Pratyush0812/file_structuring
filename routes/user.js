import express from "express"
import { User } from "../models/user.js"
import { getAllUsers, getUserDetails, newUser } from "../controllers/user.js"
const router = express.Router()

//*****get requests

router.get('/all',getAllUsers)

router.get("/userid/:id",getUserDetails)


//*****post requests
router.post('/new',newUser)



export default router