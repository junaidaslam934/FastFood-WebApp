import { Component, Input, input } from '@angular/core';
import { Cart } from '../../../shared/modals/cart';
import { CartserviceService } from '../../../services/cartservice.service';
import { CartItem } from '../../../shared/modals/cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  cart!:Cart;

  
  constructor(private cartservice:CartserviceService){
    this.cartservice.getCartObservable().subscribe((cart)=>{
      this.cart=cart

    })

  }
  removefromCart(cartitem:CartItem)
{
  this.cartservice.removeFromCart(cartitem.food.id)


}
changequantity(cartitem:CartItem,quantityinstring:string){
  const quantity=parseInt(quantityinstring)
  this.cartservice.changeQuantity(cartitem.food.id,quantity)
  

}


}
