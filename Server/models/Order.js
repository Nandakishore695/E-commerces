import mongoose, { Schema } from "mongoose";
import { User } from "./User";

const orderSchema = new Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  products: [{ product: {} }],
});
