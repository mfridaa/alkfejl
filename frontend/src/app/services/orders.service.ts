import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import { Orders } from '../classes/orders';

@Injectable()
export class OrdersService {
  private static api: string = 'http://localhost:4200/api/orders';

  constructor(
    private http: HttpClient
  ) { }

  public getOrders(): Observable<Orders[]> {
    return this.http.get(OrdersService.api) as Observable<Orders[]>;
  }

  public getOrder(id: number): Observable<Orders> {
    return this.http.get(OrdersService.api + '/' + id) as Observable<Orders>;
  }

  public delOrdersById(id: number): Observable<any> {
    return this.http.delete(OrdersService.api + '/' + id);
  }

  public delOrders(order: Orders) {
    this.delOrdersById(order.id);
  }
  

  public payOrdersById(order: Orders): Observable<Orders> {
    var id = order.id;
    var amount = order.amount;
    var status = true;
    var orderDate = order.orderDate;
    var product = order.product;
    var user = order.user;
    return this.http.put(OrdersService.api + '/' + id, {
        id,
        amount,
        status,
        orderDate,
        product,
        user
    }) as Observable<Orders>;
  }
}
