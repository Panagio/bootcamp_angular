import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {
  @Input("item") private listItem: any;
  public deleted: boolean = false; //Not good solution. Should use @Output

  constructor(private myShoppingListService: ShoppingListService) { 
    
  }

  ngOnInit() {
    console.log(this.listItem)
  }

  public removeItem(){
    this.myShoppingListService.remove(this.listItem).subscribe(
      response => this.deleted = true,
      error => console.log('deu ruim')
    );
  }

  public editItem(){
    let copiedItem = new Object();
    Object.assign(copiedItem, this.listItem);
    copiedItem['disabled'] = true;

    this.myShoppingListService.edit(copiedItem).subscribe(
      response => {
        this.listItem.disabled = true;
      },
      error => console.log('deu ruim')
    );
  }
}
