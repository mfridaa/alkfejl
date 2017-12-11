import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import { Product } from '../classes/product';

@Injectable()
export class ProductService {
  private static api: string = 'http://localhost:4200/api/product';

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get(ProductService.api) as Observable<Product[]>;
  }

  public getProduct(id: number): Observable<Product> {
    return this.http.get(ProductService.api + '/' + id) as Observable<Product>;
  }

  public delProductById(id: number): Observable<any> {
    //let idx: number = ProductService._data.findIndex((Product) => Product.id === id);
    //ProductService._data.splice(idx, 1);
    return this.http.delete(ProductService.api + '/' + id);
  }

  public delProduct(product: Product) {
    //this.delProductById(productid);
  }
}
