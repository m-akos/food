import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>(); //<Recipe> - vel
  recipes: Recipe[] = [
    new Recipe('food1', 'shit', 'https://inconspicuousconsumption.files.wordpress.com/2010/08/greensauce.jpg'),
    new Recipe('food2', 'shitter', 'https://media.istockphoto.com/photos/real-life-homemade-burger-what-hamburgers-really-look-like-picture-id927593762?s=612x612')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(selectedRecipe: Recipe) {
    this.selectedRecipe.emit(selectedRecipe);
  }

}
