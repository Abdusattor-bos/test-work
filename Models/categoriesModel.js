import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: [true, "Categoriya nomi kritilishi kerak!"],
    trim: true,
  },
  description: {
    type: "string",
    default: "Some description",
  },
});

export const Categories = mongoose.model("categories", categoriesSchema);
