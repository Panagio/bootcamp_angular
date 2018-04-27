import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';
import { ShoppingListService } from '../shopping-list.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CheckoutModalComponent } from './checkout-modal/checkout-modal.component';

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
  private myTotalPrice: string;
  animal: string;
  name: string;

  constructor(private myShoppingListService: ShoppingListService, public dialog: MatDialog) {
    this.myTotalPrice = myShoppingListService.getTotalPrice();
  }

  ngOnInit() {
  }

  openDialog(): void {
    this.myShoppingListService.removeAll();

    let dialogRef = this.dialog.open(CheckoutModalComponent, {
      height: '400px',
      width: '600px',
    });
  }
}
