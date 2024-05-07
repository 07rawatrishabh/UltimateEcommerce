import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoute from "./routes/authRoute.js"


dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("dev"))
connectDB();




app.use('/api/v1/auth',authRoute);
app.get('/', function (req, res) {
 
 res.send('Hello World i am rishabh rawat');
})
const PORT=process.env.PORT||4000;
app.listen(PORT,(req,res)=>{
   console.log(`server running on ${PORT}`);
});