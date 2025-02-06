import mongoose, { Schema } from "mongoose";

const couponSchema = new Schema(
  {
    code: {
      required: true,
      type: String,
      unique: true,
    },
    discountpercentage: {
      required: true,
      type: Number,
      min: 0,
      max: 100,
    },
    expirationdate: {
      type: Date,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Coupon= mongoose.model("Coupon",couponSchema)