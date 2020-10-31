import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {

  constructor(private menu: MenuController) { 
    //this.menu.enable(false, "custom");                   //

  }
  ionViewWillEnter () {
    this.menu.enable (true, "custom");
    }

  ngOnInit() {
  }

}
