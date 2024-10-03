import { Categories } from "../Models/categoriesModel.js";
import { APIFeatures } from "../utils/apiFeatures.js";
export const getAllCategories = async (req, res) => {
  try {
    const features = new APIFeatures(Categories.find(), req.query)
      .filter()
      .paginate()
      .limitFields()
      .sort();
    const categories = await features.query;
    res.status(200).json({
      status: "success",
      results: categories.length,
      data: categories,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
export const createCategory = async (req, res) => {
  try {
    const categories = await Categories.create(req.body);
    res.status(201).json({
      status: "success",
      results: categories.length,
      data: categories,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await Categories.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: category,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
export const deleteCategory = async (req, res) => {
  try {
    const category = await Categories.findByIdAndDelete(req.params.id);
    if (!category) {
      res.status(400).json({
        status: "fail",
        message: "Category id topilmadi",
      });
    } else {
      res.status(200).json({
        status: "success",
        data: null,
        message: "Category ochirildi",
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
export const getCategory = async (req, res) => {
  try {
    const category = await Categories.find({ _id: req.params.id });
    res.status(200).json({
      status: "success",
      data: category,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
