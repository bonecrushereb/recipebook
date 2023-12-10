import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Bacon', 3),
    new Ingredient('Lettuse', 1),
    new Ingredient('Tomato', 2),
    new Ingredient('Bread', 2)
  ];
  
  constructor() { }
  
  ngOnInit() {
    
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
