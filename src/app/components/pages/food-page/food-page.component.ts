import { Component } from '@angular/core';
import { Food } from '../../../shared/modals/food';
;
import { ActivatedRoute ,Router} from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CartserviceService } from '../../../services/cartservice.service';


@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {


  food!:Food;
  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute, // Changed to camelCase
    private cartService: CartserviceService,
    private router: Router
  ) {
    // Use activatedRoute for routing params
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.foodService.getFoodById(params['id']).subscribe(
          (serverFood) => {
            this.food = serverFood;
            console.log('Food data retrieved:', this.food); // Debugging
          },
          (error) => {
            console.error('Error retrieving food:', error); // Handle error
          }
        );
      }
    });
  

  }
  addToCart() {
   
    this.cartService.addToCart(this.food)
    this.router.navigateByUrl("/cart-page")
    
    }




}
