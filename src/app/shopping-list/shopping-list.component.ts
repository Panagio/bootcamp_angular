import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  private showNewItem: boolean = false;
  private value = 1;

  constructor() { 
  }

  ngOnInit() {
  }
  
  public shouldAdd(){
    this.showNewItem = !this.showNewItem;
  }
}
