const express = require("express");
const cors = require("cors"); 
const { connectMongoDb } = require("./connection");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 8000;

connectMongoDb("mongodb://127.0.0.1:27017/Org-chart").then(() =>
  console.log("MongoDB connected")
);


app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: true, 
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
