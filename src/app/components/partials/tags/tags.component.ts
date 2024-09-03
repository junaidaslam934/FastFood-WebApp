import { Component } from '@angular/core';
import { Tag } from '../../../shared/modals/tag';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  tags?:Tag[];
  constructor(private foodservices:FoodService){
    foodservices.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
  }
  ngOnInit(): void {
  }


}
