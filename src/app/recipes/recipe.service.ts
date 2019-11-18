import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class RecipeService {
  recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "This is a test",
      "https://scx1.b-cdn.net/csz/news/800/2016/howcuttingdo.jpg",
      [new Ingredient("Meat", 1), new Ingredient("Potato", 10)]
    ),
    new Recipe(
      "Hamburger",
      "Tasty hamburger",
      "https://scx1.b-cdn.net/csz/news/800/2016/howcuttingdo.jpg",
      [new Ingredient("Bread", 2), new Ingredient("Tomato", 2)]
    )
  ];

  getRecipe(recipeId: number) {
    return this.recipes[recipeId];
  }

  getRecipes() {
    return [...this.recipes];
  }
}
