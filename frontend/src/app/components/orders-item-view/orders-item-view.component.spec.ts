import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemViewComponent } from './orders-item-view.component';

describe('OrdersItemViewComponent', () => {
  let component: OrdersItemViewComponent;
  let fixture: ComponentFixture<OrdersItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersItemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
