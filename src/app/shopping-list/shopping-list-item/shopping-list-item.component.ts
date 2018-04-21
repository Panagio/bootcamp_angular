import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../shopping-list.service';
import { Observable } from 'rxjs/Observable';
import { CurrencyMaskModule } from "ng2-currency-mask";

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {
  private listItems: Observable<any[]>;
  private myTotalPrice: string = '0.00';
  private myTotalItems: number = 0;

  constructor(private myShoppingListService: ShoppingListService, private myCurrencyMask: CurrencyMaskModule) { 
  }

  ngOnInit() {
    this.listItems = this.myShoppingListService.listItemsFirebase;
    this.listItems.subscribe((change) => {
      var totalPrice = 0;
      this.myTotalItems = 0;
      change.forEach(item => {
        console.log('change: ' + item);
        this.myTotalItems += item['quantity'];
        totalPrice = totalPrice + (parseFloat(item['price']) * item['quantity']);
      });
      this.myTotalPrice = totalPrice.toFixed(2);
    });
  }

  public decrementQtt(item){
    var newQtt = item.quantity - 1;

    if(newQtt >= 1){
      this.updateQtt(item, newQtt);
    }
  }

  public incrementQtt(item){
    var newQtt = item.quantity +  1;
    this.updateQtt(item, newQtt);
  }

  public updateQtt(item, newQtt){
    let itemEdited = {
      key: item.key,
      quantity: newQtt
    }
    
    this.myShoppingListService.edit(itemEdited);
  }

  public removeItem(item){
    this.myShoppingListService.remove(item);
  }

  public editItem(){
   /* let itemEdited = {
      key: this.listItem.key,
      disabled: true
    }

    this.myShoppingListService.edit(itemEdited);
    */
  }

}
