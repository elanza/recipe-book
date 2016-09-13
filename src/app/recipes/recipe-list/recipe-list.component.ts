import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  //Recipes Arrays
  recipe = new Recipe('FirstElementName', 'FirstElementDescription', 'http://placehold.it/150x150');
  constructor() {}
  ngOnInit() {}
  //
  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
