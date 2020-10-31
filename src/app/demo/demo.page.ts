
import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],


})
export class DemoPage implements OnInit {
  
  
  shownGroup = null;
  shownGroup1 = null;
  shownGroup2 = null;
  shownGroup3 = null;
  shownGroup4 = null;
  shownGroup5 = null;


  public searchTerm: string = "";


  constructor(private categoryservice:CategoryService, private router:Router) {

  
  
  }
  ngOnInit() {
    
}

bus(){
  this.router.navigate(['/business']);
}
fg(){
  this.router.navigate(['/it-filings']);
}

 



   
    
    isGroupShown(group) {
      return this.shownGroup === group;
    };

    
    toggleGroup1(group) {
      if (this.isGroupShown1(group)) {
          this.shownGroup1 = null;
        } else {
          this.shownGroup1 = group;
        }
     };
    
    isGroupShown1(group) {
      return this.shownGroup1 === group;
    };


    toggleGroup2(group) {
      if (this.isGroupShown2(group)) {
          this.shownGroup2 = null;
        } else {
          this.shownGroup2 = group;
        }
     };
    
    isGroupShown2(group) {
      return this.shownGroup2 === group;
    };


    toggleGroup3(group) {
      if (this.isGroupShown3(group)) {
          this.shownGroup3 = null;
        } else {
          this.shownGroup3 = group;
        }
     };
    
    isGroupShown3(group) {
      return this.shownGroup3 === group;
    };


    toggleGroup4(group) {
      if (this.isGroupShown4(group)) {
          this.shownGroup4 = null;
        } else {
          this.shownGroup4 = group;
        }
     };
    
    isGroupShown4(group) {
      return this.shownGroup4 === group;
    };


    toggleGroup5(group) {
      if (this.isGroupShown5(group)) {
          this.shownGroup5 = null;
        } else {
          this.shownGroup5 = group;
        }
     };
    
    isGroupShown5(group) {
      return this.shownGroup5 === group;
    };

    
    

}
