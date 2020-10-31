import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-manage-business',
  templateUrl: './manage-business.page.html',
  styleUrls: ['./manage-business.page.scss'],
})
export class ManageBusinessPage implements OnInit {

  constructor(private menu: MenuController) { 
    //this.menu.enable(false, "custom");                   //

  }
  ionViewWillEnter () {
    this.menu.enable (true, "custom");
    }

  ngOnInit() {
  }

}
