import { Component, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { Orders } from '../../classes/orders';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-category-view',
  templateUrl: './Product-category-view.component.html',
  styleUrls: ['./Product-category-view.component.css'],
  providers: [ProductService]
})
export class ProductCategoryViewComponent implements OnInit {
  private product: Product[];
  private order: Orders;

  constructor(
    private ProductService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public selectCategory(id: number)
  {
    this.ProductService.getProductsByCategory(id).subscribe((product) => {
      this.product = product as Product[];
      });
    
  }

  ngOnInit() {
    let id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this.ProductService.getProductsByCategory(id).subscribe((product) => {
      this.product = product as Product[];
      });
  }

  private delProducts(id: number): void {
    this.ProductService.delProductById(id).subscribe((product) => {
      this.product = product as Product[];
    });
  }

  private addProducts(product: Product): void {
    this.ProductService.addProductsById(product).subscribe((order) => {
      this.order = order as Orders;
    });
  }
}
