import { NgModule } from '@angular/core';
import { RouterModule as NgRouterModule, Routes } from '@angular/router';
import { OrdersItemViewComponent } from '../../components/orders-item-view/orders-item-view.component';
import { ProductItemViewComponent } from '../../components/product-item-view/product-item-view.component';
import { ProductListViewComponent } from '../../components/product-list-view/product-list-view.component';
import { OrdersListViewComponent } from '../../components/orders-list-view/orders-list-view.component';
import { UserListViewComponent } from '../../components/user-list-view/user-list-view.component';
import { UserItemViewComponent } from '../../components/user-item-view/user-item-view.component';
import { LoginViewComponent } from '../../components/login-view/login-view.component';
import { RegistViewComponent } from '../../components/regist-view/regist-view.component';

const routes: Routes = [
  { path: 'orders', component: OrdersListViewComponent },
  { path: 'products', component: ProductListViewComponent },
  { path: 'orders/:id', component: OrdersItemViewComponent },
  { path: 'product/:id', component: ProductItemViewComponent },
  { path: 'users', component: UserListViewComponent },
  { path: 'user/:id', component: UserItemViewComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'registration', component: RegistViewComponent }
];

@NgModule({
  imports: [
    NgRouterModule.forRoot(routes)
  ],
  exports: [
    NgRouterModule
  ],
  declarations: []
})
export class RouterModule { }
