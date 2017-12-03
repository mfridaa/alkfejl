import { Component, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './Product-list-view.component.html',
  styleUrls: ['./Product-list-view.component.css'],
  providers: [ProductService]
})
export class ProductListViewComponent implements OnInit {
  private product: Product[];

  constructor(
    private ProductService: ProductService
  ) { }

  ngOnInit() {
    this.ProductService.getProducts().subscribe((product) => {
      this.product = product as Product[];
    });
  }

  private delProducts(id: number): void {
    this.ProductService.delProductById(id).subscribe((product) => {
      this.product = product as Product[];
    });
  }
}
