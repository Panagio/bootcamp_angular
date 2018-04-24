import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShoppingListService } from '../../shopping-list.service';
import { CurrencyMaskModule } from "ng2-currency-mask";

@Component({
  selector: 'app-shopping-list-add-item-form',
  templateUrl: './shopping-list-add-item-form.component.html',
  styleUrls: ['./shopping-list-add-item-form.component.css']
})
export class ShoppingListAddItemFormComponent implements OnInit {
  @Output() onActionClicked = new EventEmitter<boolean>();
  private myProductName: string = '';
  private myProductQtt: number = 0;
  private myProductPrice: number= 0;


  constructor(private myShoppingListService: ShoppingListService, private myCurrencyMask: CurrencyMaskModule) { 
  }

  ngOnInit() {
  }

  private addObjectToList(){
    if(this.myProductQtt <= 0 || this.myProductName == null ||
      this.myProductName.length < 1 || this.myProductPrice <= 0){
        return;
      }

    let newItem = {
      name: this.myProductName,
      quantity: this.myProductQtt,
      price: this.myProductPrice.toFixed(2)
    };
    this.myShoppingListService.add(newItem);
    
    this.myProductName = '';
    this.myProductQtt = 0;
    this.myProductPrice = 0;
    this.onActionClicked.emit(true);
  }

  private cancelAdd(){
    this.myProductName = '';
    this.myProductQtt = 0;
    this.myProductPrice = 0;
    this.onActionClicked.emit(true);
  }
}
