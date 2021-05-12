import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameElemenRef: ElementRef;
  @ViewChild('amountInput') amountElementRef: ElementRef;

  // @Output() ingredient = new EventEmitter< { ingredient: string, amount: number } >();
  @Output() ingredient = new EventEmitter<Ingredient>();
  // shoppingList: { ingredient: string, amount: number }[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingredientName = this.nameElemenRef.nativeElement.value;
    const ingredientAmount = this.amountElementRef.nativeElement.value;
    this.ingredient.emit(new Ingredient(ingredientName, ingredientAmount));

  }
}