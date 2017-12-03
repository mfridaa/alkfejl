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
  public delProdudt: EventEmitter<number> = new EventEmitter();

  public clickButton($event: Event): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.delProdudt.emit(this.product.id);
  }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

}
