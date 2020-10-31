import { Component, OnInit } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { TestComponent } from '../test/test.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {

  constructor(public popoverController: PopoverController,private menu: MenuController) { }

  ionViewWillEnter () {
    this.menu.enable (true, "custom");
    }

  ngOnInit() {
  }
  async presentPopover(eve) {
    const popover = await this.popoverController.create({
      component: TestComponent,
      componentProps:{

      },
      cssClass: 'custom-popover',
      event: eve,
      mode:'ios',
      translucent: true
    });
    popover.style.cssText = '--min-width: 250px; --max-width: 270px;';
  
    return await popover.present();
  }
}
