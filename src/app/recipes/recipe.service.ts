import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://scx1.b-cdn.net/csz/news/800/2016/howcuttingdo.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Potato', 10)],
    ),
    new Recipe(
      'Hamburger',
      'Tasty hamburger',
      'https://scx1.b-cdn.net/csz/news/800/2016/howcuttingdo.jpg',
      [new Ingredient('Bread', 2), new Ingredient('Tomato', 2)],
    ),
  ];

  getRecipes() {
    return [...this.recipes];
  }
}
