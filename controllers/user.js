import { User } from "../models/user.js"

export const getAllUsers = async (req,res)=>{

    const users = await User.find({})
    res.json({
        success: true,
        users
    })
}

export const newUser = async (req,res)=>{  //201 means created

    const{name,email,password} = req.body

    const users = await User.create({
        name,
        email,
        password
    })

    res.status(201).json({
        success: true,
        message : "Registered Successfully"
    })
}

export const getUserDetails = async (req,res)=>{
    const {id }= req.params
    const user = await User.findById(id)

    res.json({
        success : true,
        user,
    })
}