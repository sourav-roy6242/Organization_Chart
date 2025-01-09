const exprees = require("express");
const fs = require("fs");

const {connectMongoDb} = require("./connection");
const userRoutes = require("./routes/userRoutes");
// const { connect } = require("http2");



const app = exprees();
const PORT = 8000;


connectMongoDb("mongodb://127.0.0.1:27017/Org-chart").then(() => console.log("MongoDB connected"))


app.use(exprees.urlencoded({extended: false}));

//routes
app.use("/api/users", userRoutes);


app.listen(PORT, () => console.log(`server is running on port ${PORT}`));