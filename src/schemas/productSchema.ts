import { Schema } from "mongoose";

// Define Product Schema
const ProductSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  stock: { type: Boolean, default: true },
  rating: { type: Number, required: true },
});

export default ProductSchema;
