import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'A Description test', 'https://bakesbybrownsugar.com/wp-content/uploads/2022/01/Chocolate-Rugelach-2.jpg.webp'),
    new Recipe('Another Test Recipe', 'Another Description test', 'https://bakesbybrownsugar.com/wp-content/uploads/2022/01/Chocolate-Rugelach-2.jpg.webp'),
    new Recipe('A 3rd Test Recipe', 'A 3rd Description test', 'https://bakesbybrownsugar.com/wp-content/uploads/2022/01/Chocolate-Rugelach-2.jpg.webp'),
    new Recipe('The last Test Recipe', 'The last Description test', 'https://bakesbybrownsugar.com/wp-content/uploads/2022/01/Chocolate-Rugelach-2.jpg.webp')

  ];
  constructor() {}

  ngOnInit() {
    
  }
}
