import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingListService {
  private listItems: Array<any>;

  constructor(private myHttpClient: HttpClient) { 
  }

  public findAll(): Observable<Object>{
    return this.myHttpClient.get(`${environment.firebase.databaseURL}/items.json`);
  }

  public add(item): Observable<Object>{
    return this.myHttpClient.post(`${environment.firebase.databaseURL}/items.json`, item);
  }

  public remove(item): Observable <Object>{
    return this.myHttpClient.delete(`${environment.firebase.databaseURL}/items/${item.key}.json`);
  }

  public edit(item): Observable <Object>{
    return this.myHttpClient.put(`${environment.firebase.databaseURL}/items/${item.key}.json`, item);
  }
}