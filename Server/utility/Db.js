import mongoose from "mongoose";
const connectDb = async () => {
  try {
    const instance = await mongoose.connect();
  } catch (error) {
    console.log(error, error.message);
    process.exit(1);
  }
};

export default connectDb;
