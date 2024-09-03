import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListItemsComponent } from './order-list-items.component';

describe('OrderListItemsComponent', () => {
  let component: OrderListItemsComponent;
  let fixture: ComponentFixture<OrderListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderListItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
