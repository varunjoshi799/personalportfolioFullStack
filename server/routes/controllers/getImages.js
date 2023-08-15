const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const db = require("../../services/dbConnect");

// cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

exports.getImages = async (request, response) => {
    try {
        const allImages = await db.pool.query(`SELECT * FROM images`);
        response.json(allImages.rows);
    } catch (error) {
        console.log(error.message);
    }
};
