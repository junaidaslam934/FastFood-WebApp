import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm: any;

  constructor(activatedRoute:ActivatedRoute,private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['searcherm']) this.searchTerm = params['searchTerm'];
    });
   }
   ngOnInit(): void {
  }
  
  search(term: string): void {
    if (term) 

      this.router.navigateByUrl('/search/' + term); // Corrected logic inside the search method
    
  }

  }

  







