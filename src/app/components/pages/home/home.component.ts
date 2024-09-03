import { Component } from '@angular/core';
import { Food } from '../../../shared/modals/food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
foods:Food[]=[];

  
constructor(private foodService:FoodService ,ActivatedRoute:ActivatedRoute){
  let foodsObservable:Observable<Food[]>;
  ActivatedRoute.params.subscribe((params) => {
    if(params['searchTerm'])
      foodsObservable = this.foodService.getallfoodsbysearch(params['searchterm']);
    else if(params['tag'])
      foodsObservable= this.foodService.getAllFoodsByTag(params['tag']);

    else


    foodsObservable = foodService.getAll();

        foodsObservable.subscribe((serverFoods) => {
          this.foods = serverFoods;
        })
    })
    


  
  

  




 






}
ngOnInit():void{

}




}
