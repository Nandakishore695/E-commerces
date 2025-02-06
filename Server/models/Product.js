import mongoose from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      required: true,
    },
    price: {
      required: true,
      type: String,
    },

    image: {
      type: String,
      required: true,
    },
    category: {
      required: true,
      type: String,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
