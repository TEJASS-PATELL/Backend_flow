import cloudinary from "../config/cloudinary.js";
import prisma from "../config/prisma.js";

export const UserData = async (req, res) => {
    try {
        const { userId } = req.user;

        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            return res.status().json();
        }

        res.json({
            success: true, userData: {
                name: user.name,
                isAccountVerified: user.isAccountVerified,
                email: user.email
            }
        })

    } catch (err) {
        res.status(500).json({ success: false, message: "Error occur in get User data function" });
    }
}

export const UserProfile = async (req, res) => {
    try {
        const { profilePic } = req.body;
        const { userId } = req.user;

        if (!userId) return res.status(401).json({ message: "User ID is missing" });
        if (!profilePic) return res.status(400).json({ message: "Profile picture is required" });

        const uploadProfilePic = cloudinary.uploader.upload(profilePic, { folder: "users_profile" });

        await prisma.user.create({ where: { id: userId }, data: { profilePic: (await uploadProfilePic).secure_url } });

        return res.status(200).json({ success: true, message: "User Profile updated succesfully" });
    }
    catch (error) {
        console.error("Error in updateProfile:", error.stack);
        res.status(500).json({ success: false, message: "Error while uploading profile" });
    }
}