import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    usernamme: {
      type: String,
      required: [true, "Name is Required"],
    },

    email: {
      unique: true,
      type: String,
      required: [true, "email id is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minimum: [6, "minimum 6 Characters are required"],
    },

    cartItems: [
      {
        quantity: {
          type: Number,
          default: 1,
        },
        products: {
          type: momgoose.Schema.Types.objectId,
          ref: "products",
        },
        role: {
          type: String,
          enum: [Admin, customer],
          default: customer,
        },
      },
    ],
  },
  { timestamps: true }
);
export const User = mongoose.model("USer", userSchema);
