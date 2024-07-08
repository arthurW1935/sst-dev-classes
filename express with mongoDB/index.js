const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const mongoURI = process.env.MONGO_URI;
mongoose
    .connect(mongoURI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("MongoDB connection failed due to an error: ", err);
    });


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const productModel = mongoose.model("Products", productSchema);

const app = express();
app.use(express.json());
const PORT = 3000;

app.post("/api/products", async (req, res) => {
    try {
        const product = await productModel.create({
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            category: req.body.category
        });
        res.status(201).json({'message': 'Product created successfully'});
    } catch (err) {
        res.status(500).send(err);
    }
});




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});