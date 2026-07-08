import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()


const app = express();
const port = process.env.PORT || 4002;


try {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("Connected to mongodb");
  
} catch (error) {
  console.log("MongoDB connection failed: ", error);
  
}


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
