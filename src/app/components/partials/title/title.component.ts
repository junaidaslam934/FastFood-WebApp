import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
fontSize: any;

  constructor(){

  }
  @Input()
  title!:string
  @Input()
  margin?='1rem 0 1 rem 0.2rem '


  

}
