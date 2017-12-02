import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OrdersService } from '../../services/orders.service';
import { Orders } from '../../classes/orders';

@Component({
  selector: 'app-orders-item-view',
  templateUrl: './orders-item-view.component.html',
  styleUrls: ['./orders-item-view.component.css'],
  providers: [OrdersService]
})
export class OrdersItemViewComponent implements OnInit {
  private order: Orders;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordersService: OrdersService
  ) {}

  ngOnInit() {
    let id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this.ordersService.getOrder(id).subscribe((order) => {
      this.order = order as Orders
    });
  }

}
