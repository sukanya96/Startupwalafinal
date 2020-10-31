import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ModalController, AlertController } from '@ionic/angular';
import { Forgot } from '../Model/class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgt',
  templateUrl: './forgt.page.html',
  styleUrls: ['./forgt.page.scss'],
})
export class ForgtPage implements OnInit {
  public formcontrol : FormGroup;
  public formValid = true;
  showMsg: boolean = false;
  valid: boolean;
  isSubmitted = false;
  errmsg: any;
  public data: Forgot = new Forgot();

  constructor(public fb: FormBuilder , private alertCtrl: AlertController,
    private myRoute: Router, private modalCtrl: ModalController,) {
    this.formcontrol = this.fb.group({
   
      email: ["", [Validators.required, 
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    //password: ["", [Validators.required]],

   
   
     });
   }

   get errorControl() {
    return this.formcontrol.controls;
  }
   
   async confirm() {
    let alert = await this.alertCtrl.create({
      header: 'OKAY!',
      message: 'Password sent to registered Email-ID',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();

      
    });
  }
  
  ngOnInit() {
    this.valid=false;
    this.errmsg=false;
    this.isSubmitted = false;
  }
  reset()
  {
    
    this.isSubmitted = true;
    if (!this.formcontrol.valid) {
      
      return false;

    } else {
      if (this.formcontrol.valid) {
        Object.assign(this.data, this.formcontrol.value);
        console.log(this.data);

  
 
}
    }
  }

}
