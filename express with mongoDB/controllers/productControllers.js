const ProductModel = require("../models/product");

const createProduct = async (req, res) => {
  await ProductModel.create({
    product_name: req.body.product_name,
    product_price: req.body.product_price,
    isInStock: req.body.isInStock,
    category: req.body.category,
  });

  return res.status(201).json({ message: "Product Created" });
};

const getallProducts = async (req, res) => {
  const allProucts = await ProductModel.find({});

  return res.json(allProucts);
};

const getById = async (req, res) => {
  const product = await ProductModel.findById(req.params.id);

  return res.json(product);
};

const updateProduct = async (req, res) => {
  const updatedProduct = await ProductModel.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  return res.json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);

  res.json(deletedProduct);
};

module.exports = {createProduct, getallProducts, getById, updateProduct, deleteProduct};
