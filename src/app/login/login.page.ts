import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public formcontrol : FormGroup;
  valid: boolean;
  errmsg: any;
  public formValid = true;
  showMsg: boolean = false;
  isSubmitted = false;
  password_type: string = 'password';

  constructor(public fb: FormBuilder, private alertCtrl: AlertController,
    private modalCtrl: ModalController, private myRoute: Router,
    private menu: MenuController,private nav:NavController) { 
      this.menu.enable(false, "custom");                   //

    this.formcontrol = this.fb.group({
    email: ['', [Validators.required,Validators.pattern("[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
    password: ['', [Validators.required,(Validators.maxLength(10)), 
      (Validators.minLength(6))]],
    roles: this.fb.array(['USER']),
   });

  }
  

  togglePasswordMode() {   
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
 }
  
  ngOnInit() {
    this.valid=false;
    this.errmsg=false;
    this.isSubmitted = false;
    this.menu.enable (false,'main-content');
  }
  
  get errorControl() {
    return this.formcontrol.controls;
  }

  login() {
      this.isSubmitted = true;
      if (!this.formcontrol.valid) {
        console.log('Please provide all the required values!')
        return false;
      } else {
        console.log(this.formcontrol.value)
      }
      {
        this.formcontrol.reset();
       
            this.myRoute.navigate(['/dashboard']);
          }
    }
}