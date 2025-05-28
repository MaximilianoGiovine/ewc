import { NextFunction, Request, Response } from "express";

const auth = (req:Request, res:Response, next: NextFunction) =>{
    const {token} = req.headers
    console.log(token)
    if(token == "Autorizado") next()
        else res.status(400).json({message: "No tenes permiso chiquibeibi"})
}

export default auth;