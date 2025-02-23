import express from "express";
import { getRandomRecipe, getRecipeByArea, getRecipeByCategory, getRecipeById, getRecipeByIngredient, getRecipeByName, getRecipeCategories, getRecipeInstructions, getRecipeSummarize } from "../controllers/recipe.js";


const router = express.Router();

router.get("/name/:name", getRecipeByName);
router.get("/random", getRandomRecipe);
router.get("/id/:id", getRecipeById);
router.get("/categories", getRecipeCategories);
router.get("/category/:category", getRecipeByCategory);
router.get("/area/:area", getRecipeByArea);
router.get("/ingredient/:ingredients", getRecipeByIngredient);
router.get("/instructions/:id", getRecipeInstructions);
router.get("/summary/:id", getRecipeSummarize);

export default router;