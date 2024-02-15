import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
dotenv.config();


mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to Mongo DB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

const app = express();

app.use(express.json())

app.listen(3000, () => {
    console.log('Server Running on port 3000');
})


app.use('/api/user',userRoutes)
app.use('/api/auth',authRoute)

app.use((err,req,res,next)=>{
    const statusCode =err.statusCode || 500
    const message = err.message || "Internal Server Error"
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})