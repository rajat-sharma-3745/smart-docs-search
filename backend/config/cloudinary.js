import {v2 as cloudinary} from 'cloudinary'
import 'dotenv/config'

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

export const uploadOnCloudinary = async (filePath) => {
   try {
    if(!filePath) return;
      const response = await cloudinary.uploader.upload(filePath,{
        resource_type:'raw',
        folder:'internal-search'
      })
      console.log("File has been uploaded on cloudinary");
      // fs.unlinkSync(filePath);
      return response.secure_url;
   } catch (error) {
      console.log('Error uploading file')
      // fs.unlinkSync(filePath);
      return null;
   }
}