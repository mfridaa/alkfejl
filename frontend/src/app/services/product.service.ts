import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import { Product } from '../classes/product';
import { Orders } from '../classes/orders';

@Injectable()
export class ProductService {
  private static api: string = 'http://localhost:4200/api/product';
  private static orderapi: string = 'http://localhost:4200/api/orders';

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get(ProductService.api) as Observable<Product[]>;
  }

  public getProduct(id: number): Observable<Product> {
    return this.http.get(ProductService.api + '/' + id) as Observable<Product>;
  }

  public getProductsByCategory(id: number): Observable<Product[]> {
    return this.http.get(ProductService.api + '/productByCategory/' + id) as Observable<Product[]>;
  }

  public delProductById(id: number): Observable<any> {
    //let idx: number = OrdersService._data.findIndex((Orders) => Orders.id === id);
    //OrdersService._data.splice(idx, 1);
    return this.http.delete(ProductService.api + '/' + id);
  }

  public delProducts(product: Product) {
    this.delProductById(product.id);
  }

  public addProductsById(product: Product): Observable<Orders> {
    var orderDate = new Date().getTime();
    var amount = 1;
    var status = false;
    return this.http.post(ProductService.orderapi + '/addOrder', {
        amount,
        orderDate,
        status,
        product
    }) as Observable<Orders>;
  }

  public addProducts(product: Product) {
    this.addProductsById(product);
  }
}
