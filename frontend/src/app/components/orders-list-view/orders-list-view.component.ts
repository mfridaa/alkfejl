import { Component, OnInit } from '@angular/core';
import { Orders } from '../../classes/orders';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-Orders-list-view',
  templateUrl: './Orders-list-view.component.html',
  styleUrls: ['./Orders-list-view.component.css'],
  providers: [OrdersService]
})
export class OrdersListViewComponent implements OnInit {
  private orders: Orders[];

  constructor(
    private OrdersService: OrdersService
  ) { }

  ngOnInit() {
    this.OrdersService.getOrders().subscribe((orders) => {
      this.orders = orders as Orders[];
    });
  }

  private delOrders(id: number): void {
    this.OrdersService.delOrdersById(id).subscribe((orders) => {
      this.orders = orders as Orders[];
    });
  }
}
