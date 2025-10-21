import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../config/prisma.js";
import transporter from "../config/nodemailer.js";

export const signup = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.json({ success: false, message: 'Missing Detail' });
    }

    try {
        const cleanEmail = email.trim().toLowerCase();
        const existingUser = await prisma.user.findUnique({ where: { email: cleanEmail } });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists." });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: { name, email: cleanEmail, password: hashedPassword }
        })

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        const mailOption = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: "Welcome to your demo app",
            text: `Your account has been created with a email: ${email} welcome lets start building`
        }

        await transporter.sendMail(mailOption);

        res.status(201).json({ success: true, message: "Signup successful!" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: err.message });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required" })
    }

    try {
        const cleanEmail = email.trim().toLowerCase();
        const user = await prisma.user.findUnique({ where: { email: cleanEmail } });
        if (!user) {
            return res.status(401).json({ success: false, message: "User does't exists invalid email." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid Password." });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(201).json({ success: true, message: "Login successful!" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: err.message });
    }
}

export const logout = (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        });
        return res.json({ success: true, message: "Logged out successfully." });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: err.message });
    }
}

export const sendVerifyOtp = async (req, res) => {
    try {
        const { userId } = req.user;

        const user = await prisma.user.findUnique({ where: { id: userId } });

        if (user.isAccountVerified) {
            res.json({ success: false, message: "Account already verified" });
        }

        const otp = String(Math.floor(100000 + Math.random() * 900000));

        await prisma.user.update({
            where: { id: userId },
            data: {
                verifyOtp: otp,
                verifyOtpExpireAt: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
            }
        })

        const mailOption = {
            from: process.env.GMAIL_USER,
            to: user.email,
            subject: "Account verification otp",
            text: `Your account has been created with a email: ${user.email} and your verification otp: ${otp}`
        }

        await transporter.sendMail(mailOption);

        return res.status(200).json({ success: true, message: "OTP sent successfully" })
    } catch (err) {
        console.log("Otp Send Error: ", err);
        res.status(500).json({ success: false, message: "Server error while sending OTP." });
    }
}

export const verifyEmail = async (req, res) => {
    const { otp } = req.body;
    const { userId } = req.user;

    if (!userId || !otp) {
        return res.json({ success: false, message: "Otp required" });
    }
    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });

        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        if (!user.verifyOtp || user.verifyOtp !== otp) {
            return res.json({ success: false, message: 'Invalid Otp' });
        }

        if (user.verifyOtpExpireAt < Math.floor(Date.now() / 1000)) {
            return res.json({ success: false, message: "Otp expired" });
        }

        await prisma.user.update({
            where: { id: userId },
            data: {
                isAccountVerified: true,
                verifyOtp: "",
                verifyOtpExpireAt: 0,
            }
        })

        return res.status(200).json({ success: true, message: "Email verified successfully!" });

    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Server error while verifying email." });

    }
}

export const isauth = async (req, res) => {
    try {
        res.status(200).json({ success: true, message: "User is authenticated" });
    } catch (err) {
        console.log("Auth error : ", err);
        return res.status(500).json({ success: false, message: "Auth function errror" });
    }
}

export const sendPasswordResetOtp = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required", success: false });
    }

    try {
        const user = await prisma.user.findUnique({ where: { email: email } });
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        const otp = String(Math.floor(100000 + Math.random() * 900000));

        await prisma.user.update({
            where: { email: email },
            data: {
                resetOtp: otp,
                resetOtpExpireAt: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
            }
        })

        const mailOption = {
            from: process.env.GMAIL_USER,
            to: user.email,
            subject: "Password reset otp",
            text: `Your Password reset otp is ${otp}`
        }

        await transporter.sendMail(mailOption);

        return res.status(200).json({ success: true, message: "Password reset OTP sent successfully" });

    } catch (err) {
        res.status(500).json({ success: false, message: "Error in password reset function" });
    }
}

export const resetPassword = async (req, res) => {
    const { email, newPassword, otp } = req.body;

    if (!email || !newPassword || !otp) {
        return res.status(400).json({ success: false, message: "Email, Otp and NewPassword are required" });
    }

    try {
        const user = await prisma.user.findUnique({ where: { email: email } });

        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        if (!user.resetOtp || user.resetOtp !== otp) {
            return res.json({ success: false, message: 'Invalid Otp' });
        }

        if (user.resetOtpExpireAt < Math.floor(Date.now() / 1000)) {
            return res.json({ success: false, message: "Otp expired" });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await prisma.user.update({
            where: { email: email },
            data: {
                password: hashedPassword,
                resetOtp: "",
                resetOtpExpireAt: 0,
            }
        })

        return res.status(200).json({ message: "Password has been reset succesfully", success: true });
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ success: false, message: err.message });
    }
}

export const deleteAccount = async (req, res) => {
    try {
        const { userId } = req.user;
        if (!userId) return res.status(401).json({ success: false, message: "UserId is missing" });

        await prisma.user.delete({ where: {id: userId}});

        res.clearCookie("jwt", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Lax",
        });

        return res.status(200).json({ success: true, message: "Account deleted successfully" });
    }
    catch (error) {
        console.log("deleteAccount error:", error);
        res.status(500).json({ success: false, message: "Something went wrong while deleting account" });
    }
}
