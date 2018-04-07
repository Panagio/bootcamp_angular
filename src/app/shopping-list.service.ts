import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {
  private listItems: Array<any>;

  constructor() { 
    this.listItems = [
      {
        name: 'Bread',
        disabled: false
      },
      {
        name: 'Butter',
        disabled: false
      },
      {
        name: 'Coffee',
        disabled: false
      },
      {
        name: 'Cookies',
        disabled: true
      }
    ];
  }

  public findAll(): Array<any>{
    return this.listItems;
  }

  public add(item){
    if(item.name && item.name.trim()){
      this.listItems.unshift(item);
    }
  }

  public remove(item){
    let index = this.listItems.indexOf(item);
    if(index >= 0){
      this.listItems.splice(index, 1);
    }
  }

  public cross(item){
    let index = this.listItems.indexOf(item);
    if(index >= 0){
      this.listItems[index].disabled = true;
    }
  }
}