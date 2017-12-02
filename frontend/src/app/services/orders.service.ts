import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import { Orders } from '../classes/orders';

@Injectable()
export class OrdersService {
  private static api: string = 'http://localhost:4200/api/Orderss';

  constructor(
    private http: HttpClient
  ) { }

  public getOrders(): Observable<Orders[]> {
    //return OrdersService._data;
    let ordersStream = this.http.get(OrdersService.api) as Observable<Orders[]>;
    return ordersStream;
  }

  public getOrder(id: number): Observable<Orders> {
    //return OrdersService._data.find((Orders) => Orders.id === id);
    let ordersStream = this.http.get(OrdersService.api + '/' + id) as Observable<Orders>;
    return ordersStream;
  }

  public delOrdersById(id: number): Observable<any> {
    //let idx: number = OrdersService._data.findIndex((Orders) => Orders.id === id);
    //OrdersService._data.splice(idx, 1);
    return this.http.delete(OrdersService.api + '/' + id);
  }

  public delOrders(order: Orders) {
    //this.delOrdersById(ordersid);
  }
}
