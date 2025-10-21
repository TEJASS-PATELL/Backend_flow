import prisma from "../config/prisma.js";

export const getUserData = async   (req, res) => {
    try{
        const {userId} = req.body;

        const user = await prisma.user.findUnique({where: {id: userId}});
        if(!user){
            return res.status().json();
        }

        res.json({success: true, userData : {
            name: user.name,
            isAcc
        }})

    }catch(err){
        res.status(500).json({success: false, message: "Error occur in get User data function"});
    }
}