import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product-view',
  templateUrl: './new-product-view.component.html',
  styleUrls: ['./new-product-view.component.css'],
  providers: [ProductService]
})
export class NewProductViewComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  private tryAddProduct(name: string, picture: string, price: number, category:number): void {
    this.productService.newProduct(name, picture, price, category).subscribe((product) => {
    });
  }
}
