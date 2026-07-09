import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import noteRoutes from "./routes/note_route.js"

dotenv.config()


const app = express();
const port = process.env.PORT || 5001;


try {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("Connected to mongodb");
  
} catch (error) {
  console.log("MongoDB connection failed: ", error);
  
}





app.use("/api/v1/noteapp", noteRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
