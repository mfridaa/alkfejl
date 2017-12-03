import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersListViewComponent } from './Orders-list-view.component';

describe('OrdersListViewComponent', () => {
  let component: OrdersListViewComponent;
  let fixture: ComponentFixture<OrdersListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
