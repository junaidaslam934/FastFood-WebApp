import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {


  @Input()
  visible=false
  @Input()
  notFoundMessage='nothing found'
  @Input()
  resetLinkText='reset'
  
  @Input()
  resetLinkRoute="/"
  
  constructor(){
    
  }

  ngOnInit(): void {
      
  }

}
