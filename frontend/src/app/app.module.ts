import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from './modules/router/router.module';

import { AppComponent } from './app.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersListViewComponent } from './components/orders-list-view/orders-list-view.component';
import { OrdersItemViewComponent } from './components/orders-item-view/orders-item-view.component';
import { UserListViewComponent } from './components/user-list-view/user-list-view.component';
import { UserItemViewComponent } from './components/user-item-view/user-item-view.component';
import { LoginViewComponent } from './components/login-view/login-view.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrdersListViewComponent,
    OrdersItemViewComponent,
    UserListViewComponent,
    UserItemViewComponent,
    LoginViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
