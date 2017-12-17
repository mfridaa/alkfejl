import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../classes/product';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [AuthService]
})
export class ProductComponent implements OnInit {
  @Input()
  public product: Product;

  @Output()
  public delProducts: EventEmitter<number> = new EventEmitter();
  @Output()
  public addProducts: EventEmitter<Product> = new EventEmitter();

  public clickDeleteButton($event: Event): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.delProducts.emit(this.product.id);
  }

  public clickAdd($event: Event): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.addProducts.emit(this.product);
  }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

}
