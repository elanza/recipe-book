"use strict";
var Recipe = (function () {
    // Configuring class Recipe - items to show.
    // Export Class to recipe-item Component for use
    // Todo  What is a Constructor?
    function Recipe(name, description, imagePath) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
    return Recipe;
}());
exports.Recipe = Recipe;
//# sourceMappingURL=recipe.js.map