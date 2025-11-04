const Image = require('../models/Image');
const {uploadCloudinary} = require('../helper/cloudinaryhelper'); 
// const { model } = require('mongoose');

const uploadImage = async(req ,res)=>{
    try {
        if(!req.file){
            res.status(400).json({
                success : false,
                message : "File is required to upload" 
            })
        }

        const {url , publicId} = await uploadCloudinary(req.file.path);

        const newlyImageuplaod = new Image({
            url ,
            publicId ,
            uploadedBy : req.userInfo.userId
        })

        await newlyImageuplaod.save();

        res.status(201).json({
            message:"Image uploaded successfully",
            data : newlyImageuplaod 
        })



    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false ,
            message : "Some error occured try again later"
        })
    }
}


module.exports = {
    uploadImage 
}