import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../../shopping-list.service';
import { CurrencyMaskModule } from "ng2-currency-mask";

@Component({
  selector: 'app-shopping-list-add-item-form',
  templateUrl: './shopping-list-add-item-form.component.html',
  styleUrls: ['./shopping-list-add-item-form.component.css']
})
export class ShoppingListAddItemFormComponent implements OnInit {
  private myProductName: string = '';
  private myProductQtt: number = 0;
  private myProductPrice: number= 0;


  constructor(private myShoppingListService: ShoppingListService, private myCurrencyMask: CurrencyMaskModule) { 
    
  }

  ngOnInit() {
  }

  private addObjectToList(){
    let newItem = {
      name: this.myProductName,
      quantity: this.myProductQtt,
      price: this.myProductPrice.toFixed(2)
    };
    this.myShoppingListService.add(newItem);
    
    this.myProductName = '';
    this.myProductQtt = 0;
    this.myProductPrice = 0;
  }
}
