import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipeSelected = new Subject<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Test Recipe',
  //     'This is a test',
  //     'https://scx1.b-cdn.net/csz/news/800/2016/howcuttingdo.jpg',
  //     [new Ingredient('Meat', 1), new Ingredient('Potato', 10)]
  //   ),
  //   new Recipe(
  //     'Hamburger',
  //     'Tasty hamburger',
  //     'https://scx1.b-cdn.net/csz/news/800/2016/howcuttingdo.jpg',
  //     [new Ingredient('Bread', 2), new Ingredient('Tomato', 2)]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  getRecipe(recipeId: number) {
    return this.recipes[recipeId];
  }

  getRecipes() {
    return [...this.recipes];
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(recipes);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next([...this.recipes]);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next([...this.recipes]);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next([...this.recipes]);
  }
}
