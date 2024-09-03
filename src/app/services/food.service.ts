import { Injectable } from '@angular/core';
import { Food } from '../shared/modals/food';

import { Tag } from '../shared/modals/tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOOD_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL } from '../shared/constants/urs';
import { sample_foods, sample_tags } from '../../data';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }
  


  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  }



  getallfoodsbysearch(searchterm:string){
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchterm);
  }
  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag === "All" ?
    this.getAll() :
    this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  
}
getFoodById(foodId:string):Observable<Food>{
  return this.http.get<Food>(FOOD_BY_ID_URL + foodId);
}
}
