**Components List**
App.component
 - HeaderComponent
 - RecipesComponent 
		- RecipeListComponent
			export class RecipeListComponent implements OnInit {
  		recipes: Recipe[] = [];
  		@Output() recipeSelected = new EventEmitter<Recipe>();
  		recipe = new Recipe(‘FirstElementName’,’FirstElementDescription’, ‘http:’);
  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
		- RecipeDetailComponent
			export class RecipeDetailComponent implements OnInit {
  			@Input() selectedRecipe: Recipe;
			}


**Classes**
-recipe
export class Recipe {
constructor( public name, public description, public imagePath{}
}