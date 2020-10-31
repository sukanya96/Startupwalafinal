import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public items: any = [];


  constructor() {

    this.items = [
      
      {id:1,category:'Start Business'},
      {id:2,category:'IT Filings'},
       {id:3,category:'GST Regestration'},
       {id:4,category:'GST Fillings'},
       {id:5,category:'Compliance'},
       {id:6,category:'Manage business'}
   ];

   }

   
  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.category.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
