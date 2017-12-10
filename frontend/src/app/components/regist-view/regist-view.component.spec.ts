import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistViewComponent } from './regist-view.component';

describe('RegistViewComponent', () => {
  let component: RegistViewComponent;
  let fixture: ComponentFixture<RegistViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
