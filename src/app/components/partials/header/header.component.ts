import { Component, Input, input } from '@angular/core';
import { Cart } from '../../../shared/modals/cart';
import { CartserviceService } from '../../../services/cartservice.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/modals/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartQyantity=0
  user!: User;
  constructor(private userservice:UserService, private cartservice:CartserviceService){
    cartservice.getCartObservable().subscribe((newCart) => {
      this.cartQyantity = newCart.totalCount;

    })
    userservice.userObservable.subscribe((newUser) => {
      this.user = newUser; // Use = to assign the value
    });

  }
  logout2() {
    console.log("Logout initiated");
    this.userservice.logout();
    console.log("Logout process completed");
  }

  get isAuth(): boolean {
    return !!this.user.token; // Check if the user has a valid token
  }
}
