import { NgModule } from '@angular/core';
import { RouterModule as NgRouterModule, Routes } from '@angular/router';
import { OrdersItemViewComponent } from '../../components/orders-item-view/orders-item-view.component';
import { OrdersListViewComponent } from '../../components/orders-list-view/orders-list-view.component';
import { UserListViewComponent } from '../../components/user-list-view/user-list-view.component';
import { UserItemViewComponent } from '../../components/user-item-view/user-item-view.component';
import { LoginViewComponent } from '../../components/login-view/login-view.component';

const routes: Routes = [
  { path: '', component: OrdersListViewComponent },
  { path: 'orders/:id', component: OrdersItemViewComponent },
  { path: 'users', component: UserListViewComponent },
  { path: 'user/:id', component: UserItemViewComponent },
  { path: 'login', component: LoginViewComponent }
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
