import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-prtct-business',
  templateUrl: './prtct-business.page.html',
  styleUrls: ['./prtct-business.page.scss'],
})
export class PrtctBusinessPage implements OnInit {

  constructor(private menu: MenuController) {
    //this.menu.enable(false, "custom");                   //

   }
   ionViewWillEnter () {
    this.menu.enable (true, "custom");
    }

  ngOnInit() {
  }

}
