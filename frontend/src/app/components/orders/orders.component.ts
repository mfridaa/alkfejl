import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Orders } from '../../classes/orders';
import { AuthService } from '../../services/auth.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [AuthService]
})
export class OrdersComponent implements OnInit {
  @Input()
  public order: Orders;

  @Output()
  public delOrders: EventEmitter<number> = new EventEmitter();

  public clickButton($event: Event): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.delOrders.emit(this.order.id);
  }

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

}
