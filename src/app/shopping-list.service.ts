import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ShoppingListService {
  private listItems: Array<any>;
  public listItemsFirebase: Observable<any[]>;
  private listItemsRef: AngularFireList<any>;

  constructor(private myHttpClient: HttpClient, private myDb: AngularFireDatabase) { 
    this.listItemsRef = this.myDb.list('items');
    this.listItemsFirebase = this.listItemsRef.snapshotChanges().map(
      changes => {
        return changes.map(c => {
          console.log(c.payload.val());
          return {
            key: c.payload.key,
            name: c.payload.val()['name'],
            quantity: c.payload.val()['quantity'],
            price: c.payload.val()['price']
          }
        })
      }
    );
  }

  public add(item){
    this.listItemsRef.push(item);
  }

  public remove(item){
    this.listItemsRef.remove(item.key);
  }

  public removeAll(){
    this.listItemsRef.remove();
  }

  public edit(item){
    let key = item.key;
    delete item.key;

    this.listItemsRef.update(key, item);
  }
}