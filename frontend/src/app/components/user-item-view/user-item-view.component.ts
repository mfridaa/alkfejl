import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';
import { OrdersService } from '../../services/orders.service';
import { Orders } from '../../classes/orders';

@Component({
  selector: 'app-user-item-view',
  templateUrl: './user-item-view.component.html',
  styleUrls: ['./user-item-view.component.css'],
  providers: [UserService, OrdersService]
})
export class UserItemViewComponent implements OnInit {
  private user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    let id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe((user) => {
      this.user = user as User;
      this.userService.getOrdersByUser(user).subscribe((orders) => {
        this.user.orders = orders;
      });
    });
  }

  private delOrder(id: number): void {
    this.ordersService.delOrdersById(id).subscribe((orders) => {
      this.user.orders = orders.filter(order => order.user.id == this.user.id) as Orders[];
    });
  }

}
