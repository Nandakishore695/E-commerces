import mongoose, { Schema } from "mongoose";
import { User } from "./User";

const orderSchema = new Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      totalamount: {
        type: String,
        required: true,
        min: 0,
      },
      StripeSessioId: {
        unique: true,
        type: String,
        required: true,
      },
    },
    { timestamps: true },
  ],
});

const order = mongoose.model("Order", orderSchema);

export default order;
