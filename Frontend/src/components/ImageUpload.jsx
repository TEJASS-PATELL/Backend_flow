import React from 'react'
import { Camera, ImageUp } from "lucide-react";

export default function ImageUpload() {
    return (
        <form className="upload-form" encType="multipart/form-data">
            <label htmlFor="profilepic" className="avatar-upload-btn">
                <Camera className="icon" />
                <input type="file" className="hidden" name="profilepic" id="avtar-upload" accept="image/*"></input>
            </label>
        </form>
    )
}
