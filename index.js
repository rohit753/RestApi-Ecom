const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const userRoute =require("./routes/Users")
const authRoute = require("./routes/auth")
const productRoute= require("./routes/Product")




dotenv.config();

// Mongo Connect


mongoose.connect(process.env.Mongo_url).then(() => console.log("Database connected successfully")).catch((err) => { console.log(err) })


//routes
// app.get("/api/test", () => {
//     console.log("test route sucessful")
// })
// using routes

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);


// server start om port
app.listen(process.env.PORT||4000,()=> {
    console.log("server is up and running")
})
