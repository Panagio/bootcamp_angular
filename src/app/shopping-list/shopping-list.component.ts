import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  private showNewItem: boolean = false;
  private value = 1;

  constructor(private myShoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  public shouldDisableCheckout(){
    return parseFloat(this.myShoppingListService.getTotalPrice()) <= 0;
  }

  public shouldAdd() {
    this.showNewItem = !this.showNewItem;
  }

  action(event) {
    this.showNewItem = false;
  }
}
