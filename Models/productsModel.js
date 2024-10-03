import mongoose, { Schema } from "mongoose";
import { Categories } from "./categoriesModel.js";

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product nomi kritilishi kerak!"],
    trim: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: [String],
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "categories",
  },
  category: {
    type: String,
  },
});

productsSchema.pre("save", async function (next) {
  if (this.isModified("categoryId")) {

    const category = await Categories.findById(this.categoryId);
    if (!category) {
      return next(new Error("Category not found"));
    }

    this.category = category.name;
  }
  console.log(this);
  next();
});

export const Products = mongoose.model("products", productsSchema);
