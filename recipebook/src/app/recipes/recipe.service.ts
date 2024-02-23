import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'A Description test', 'https://bakesbybrownsugar.com/wp-content/uploads/2022/01/Chocolate-Rugelach-2.jpg.webp'),
        new Recipe('Another Test Recipe', 'Another Description test', 'https://bakesbybrownsugar.com/wp-content/uploads/2022/01/Chocolate-Rugelach-2.jpg.webp'),
        new Recipe('A 3rd Test Recipe', 'A 3rd Description test', 'https://bakesbybrownsugar.com/wp-content/uploads/2022/01/Chocolate-Rugelach-2.jpg.webp'),
        new Recipe('The last Test Recipe', 'The last Description test', 'https://bakesbybrownsugar.com/wp-content/uploads/2022/01/Chocolate-Rugelach-2.jpg.webp')
    
      ];

      getRecipes() {
        return this.recipes.slice();
      }
}