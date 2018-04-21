import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import { ShoppingListService } from './shopping-list.service';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ShoppingListAddItemFormComponent } from './shopping-list/shopping-list-add-item-form/shopping-list-add-item-form.component';
import { ShoppingListCheckoutComponent } from './shopping-list/shopping-list-checkout/shopping-list-checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    AboutComponent,
    ShoppingListAddItemFormComponent,
    ShoppingListCheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(APP_ROUTES),
    CurrencyMaskModule
  ],
  providers: [ShoppingListService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
