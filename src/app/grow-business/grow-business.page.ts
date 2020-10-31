import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-grow-business',
  templateUrl: './grow-business.page.html',
  styleUrls: ['./grow-business.page.scss'],
})
export class GrowBusinessPage implements OnInit {

  constructor(private menu: MenuController) { 
    //this.menu.enable(false, "custom");                   
  }
  ionViewWillEnter () {
    this.menu.enable (true, "custom");
    }

  ngOnInit() {
  }

}
