import User from "../models/user.model.js"
import bycrptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js"

export const signup = async ( req ,res , next)=>{

    const {username,email,password}= req.body
    const hashedPassword = bycrptjs.hashSync(password,10)
    const newUser = new User ({username,email,password:hashedPassword})
 try{
    await newUser.save()
 
    res.status (201).json ({message : "User Created Successfully"})
 }catch (err){
    // res.status(500).json(err.message)
    next (err)
 }
}