import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const authentication = async (req, res, next) => {
    try{
    let token;
    if(
        req.headers.authorization && req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }

    if(!token){
        return res.status(401).json({message: "Not authorized"});
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({where : {id: decode.id}})

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
}catch(error){
    console.log(error);
    res.status(401).json({message: "Token invalid or expired"})
}
}

export default authentication;