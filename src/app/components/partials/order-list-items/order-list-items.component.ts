import { Component, Input } from '@angular/core';
import { Order } from '../../../shared/modals/order';

@Component({
  selector: 'order-list-items',
  templateUrl: './order-list-items.component.html',
  styleUrl: './order-list-items.component.css'
})
export class OrderListItemsComponent {
  @Input()
  order!:Order;
  constructor() { } 

  ngOnInit(): void {
  }

}
