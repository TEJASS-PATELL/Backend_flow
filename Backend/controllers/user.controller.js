import prisma from "../config/prisma.js";

export const UserData = async (req, res) => {
    try{
        const {userId} = req.body;

        const user = await prisma.user.findUnique({where: {id: userId}});
        if(!user){
            return res.status().json();
        }

        res.json({success: true, userData : {
            name: user.name,
            isAccountVerified: user.isAccountVerified,
            email: user.email
        }})

    }catch(err){
        res.status(500).json({success: false, message: "Error occur in get User data function"});
    }
}