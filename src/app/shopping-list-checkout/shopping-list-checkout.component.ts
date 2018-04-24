import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-checkout',
  templateUrl: './shopping-list-checkout.component.html',
  styleUrls: ['./shopping-list-checkout.component.css']
})
export class ShoppingListCheckoutComponent implements OnInit {
  private myCardName: string = '';
  private myCardNumber: string = '';
  private myCardCV: string = '';
  private myCardExpireDate: string = '';
  private myCardNumberMask: any[] = [/\d/, /\d/, /\d/, /\d/, ' ',  /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/,' ', /\d/, /\d/, /\d/, /\d/];
  private myCardExpireDateMask: any[] = [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  private myCardCVCMask: any[] = [/\d/, /\d/, /\d/];
  private showModal: boolean =  false;
  private myTotalPrice: string;

  constructor(private myShoppingListService: ShoppingListService) {
    this.myTotalPrice = myShoppingListService.getTotalPrice();
  }

  ngOnInit() {
  }

  openModel() {
    this.showModal = true;
  }
  closeModel() {
    this.showModal = false;
  }

}
