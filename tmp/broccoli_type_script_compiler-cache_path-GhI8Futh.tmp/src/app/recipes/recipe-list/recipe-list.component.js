"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var recipe_1 = require('../recipe');
var recipe_item_component_1 = require('./recipe-item.component');
var RecipeListComponent = (function () {
    function RecipeListComponent() {
        this.recipes = [];
        this.recipeSelected = new core_1.EventEmitter();
        this.recipe = new recipe_1.Recipe('FirstElementName', 'FirstElementDescription', 'data');
    }
    RecipeListComponent.prototype.ngOnInit = function () { };
    //Pasando cuando click hacia los detalles en recipes.component
    RecipeListComponent.prototype.onSelected = function (recipe) {
        this.recipeSelected.emit(recipe);
    };
    RecipeListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rb-recipe-list',
            templateUrl: 'recipe-list.component.html',
            directives: [recipe_item_component_1.RecipeItemComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], RecipeListComponent);
    return RecipeListComponent;
}());
exports.RecipeListComponent = RecipeListComponent;
//# sourceMappingURL=recipe-list.component.js.map