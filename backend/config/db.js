import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Sandeep:987654321@cluster0.zyer5.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
