import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Order } from '../../../shared/modals/order';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';
import { CartserviceService } from '../../../services/cartservice.service';
declare var paypal: any;

@Component({
  selector: 'paypal-button',
  templateUrl: './paypal.component.html',
  styleUrl: './paypal.component.css'
})
export class PaypalComponent {
  @Input()
  order!: Order;
  

  @ViewChild('paypal', { static: true })
  paypalElement!: ElementRef;

  constructor(
    private orderService: OrderService,
    private cartService: CartserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {

    const self = this;
    paypal
      .Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: 'CAD',
                  value: self.order.totalPrice,
                },
              },
            ],
          });
        },

        onApprove: async (data: any, actions: any) => {
          const payment = await actions.order.capture();
          this.order.paymentId = payment.id;
          self.orderService.pay(this.order).subscribe({
            next: (orderId: string) => {
              this.cartService.clearCart();
              this.router.navigateByUrl('/track/' + orderId);
              window.alert('Payment Saved Successfully');
            },
            error: (error: any) => {
              window.alert('Payment Save Failed');
            },
          });
        },

        onError: (err: any) => {
          window.alert('Payment Failed');
          console.log(err);
        },
      })
      .render(this.paypalElement.nativeElement);
  }
  }




