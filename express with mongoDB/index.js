const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
require('dotenv').config()


const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log("Db connection Failed", err);
  });


app.use('/api/products' , productRoutes)
app.use('/api/users' , userRoutes)


app.listen(8086, () => {
  console.log("Server sarted at port 8086");
});