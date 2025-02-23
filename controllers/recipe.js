import axios from "axios";
import  ErrorHandler  from "../middlewares/error.js";
export const getRecipeByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${name}?apiKey=${process.env.API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(
      "Error getting recipe by name:",
      error.response?.data || error.message
    );
    next(
      new ErrorHandler(
        error.response?.status || 500,
        error.response?.data?.message || "Error getting recipe by name"
      )
    );
  }
};

export const getRandomRecipe = async (req, res, next) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(
      "Error getting random recipe:",
      error.response?.data || error.message
    );
    next(
      new ErrorHandler(
        error.response?.status || 500,
        error.response?.data?.message || "Error getting random recipe"
      )
    );
  }
};

export const getRecipeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(
      "Error getting recipe by id:",
      error.response?.data || error.message
    );
    next(
      new ErrorHandler(
        error.response?.status || 500,
        error.response?.data?.message || "Error getting recipe by id"
      )
    );
  }
};
export const getRecipeCategories = async (req, res, next) => {
  try {
    const response = await axios.get(
      "www.themealdb.com/api/json/v1/1/categories.php"
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(
      "Error getting recipe categories:",
      error.response?.data || error.message
    );
    next(
      new ErrorHandler(
        error.response?.status || 500,
        error.response?.data?.message || "Error getting recipe categories"
      )
    );
  }
};
export const getRecipeByCategory = async (req, res, next) => {
  try {
    const { category } = req.params;
    const response = await axios.get(
      `www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(
      "Error getting recipe by category:",
      error.response?.data || error.message
    );
    next(
      new ErrorHandler(
        error.response?.status || 500,
        error.response?.data?.message || "Error getting recipe by category"
      )
    );
  }
};
export const getRecipeByArea = async (req, res, next) => {
  try {
    const { area } = req.params;
    const response = await axios.get(
      `www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(
      "Error getting recipe by area:",
      error.response?.data || error.message
    );
    next(
      new ErrorHandler(
        error.response?.status || 500,
        error.response?.data?.message || "Error getting recipe by area"
      )
    );
  }
};
export const getRecipeByIngredient = async (req, res, next) => {
  try {
    const { ingredients } = req.params;
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=100?apiKey=${process.env.API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(
      "Error getting recipe by ingredient:",
      error.response?.data || error.message
    );
    next(
      new ErrorHandler(
        error.response?.status || 500,
        error.response?.data?.message || "Error getting recipe by ingredient"
      )
    );
  }
};
export const getRecipeSummarize = async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/summary?apiKey=${process.env.API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(
      "Error getting recipe summary:",
      error.response?.data || error.message
    );
    next(
      new ErrorHandler(
        error.response?.status || 500,
        error.response?.data?.message || "Error getting recipe summary"
      )
    );
  }
};
export const getRecipeInstructions = async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${process.env.API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(
      "Error getting recipe instructions:",
      error.response?.data || error.message
    );
    next(
      new ErrorHandler(
        error.response?.status || 500,
        error.response?.data?.message || "Error getting recipe instructions"
      )
    );
  }
};
