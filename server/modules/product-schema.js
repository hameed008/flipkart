// to create a schema we have to first import 'mongoose' because the Schema() method is defined inside the mongoose.
import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true, // this will prevent data duplication in the database.
  },

  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String
});

const Product = mongoose.model('product', productSchema)

export default Product;