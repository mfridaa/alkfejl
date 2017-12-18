import { Component, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { Orders } from '../../classes/orders';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './Product-list-view.component.html',
  styleUrls: ['./Product-list-view.component.css'],
  providers: [ProductService]
})
export class ProductListViewComponent implements OnInit {
  private product: Product[];
  private order: Orders;
  private error: boolean;
  private add: boolean;

  constructor(
    private ProductService: ProductService
  ) { }

  ngOnInit() {
    this.add = false;
    this.ProductService.getProducts().subscribe((product) => {
      this.product = product as Product[];
    });
  }

  private delProducts(id: number): void {
    this.add = false;
    this.ProductService.delProductById(id).subscribe((product) => {
      this.product = product as Product[];
    },(err) => {
      if (err.status === 500) {
        this.error = true;
      }
    });
  }

  private addProducts(product: Product): void {
    this.add = false;
    this.ProductService.addProductsById(product).subscribe((order) => {
      this.order = order as Orders;
    });
    this.add = true;
  }
}
