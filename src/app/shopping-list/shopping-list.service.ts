import { Ingredient } from '../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [new Ingredient('Apples', 3), new Ingredient('Tomatoes', 10)];

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
}
