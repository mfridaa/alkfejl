import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../classes/product';

@Component({
  selector: 'app-product-item-view',
  templateUrl: './product-item-view.component.html',
  styleUrls: ['./product-item-view.component.css'],
  providers: [ProductService]
})
export class ProductItemViewComponent implements OnInit {
  private product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    let id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe((product) => {
      this.product = product as Product
    });
  }

}
