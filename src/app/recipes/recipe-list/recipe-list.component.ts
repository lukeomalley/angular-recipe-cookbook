import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://scx1.b-cdn.net/csz/news/800/2016/howcuttingdo.jpg',
    ),
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://scx1.b-cdn.net/csz/news/800/2016/howcuttingdo.jpg',
    ),
  ];
  constructor() {}

  ngOnInit() {}
}
