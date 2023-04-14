import {
  Component,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: true }) nameInpRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInpRef: ElementRef;
  constructor(private shoppingListService: ShoppingListService) {}
  onAddItem() {
    const newIngredient = new Ingredient(
      this.nameInpRef.nativeElement.value,
      this.amountInpRef.nativeElement.value
    );
    this.shoppingListService.addIngredient(newIngredient);
  }
}
