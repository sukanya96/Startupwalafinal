import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, MenuController, ModalController, NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Login } from '../Models/class';
import { SevicefileService } from '../sevicefile.service';



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
  public data: Login = new Login;
  
  constructor(public fb: FormBuilder, private alertCtrl: AlertController,
    private modalCtrl: ModalController, private myRoute: Router,public servicefile:SevicefileService,
    private menu: MenuController,private nav:NavController,public platform:Platform ) { 
    this.menu.enable(false, "custom");                   

    this.formcontrol = this.fb.group({
    email: ['', [Validators.required,Validators.pattern("[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
    // password: ['', [Validators.required,(Validators.maxLength(10)), 
    //   (Validators.minLength(6))]],
  });
    
  }
  
  ngOnInit() {
    this.login();
    this.valid=false;
    this.errmsg=false;
    this.isSubmitted = false;
    this.menu.enable (false,'main-content');
  }
  
  get errorControl() {
    return this.formcontrol.controls;
  }

  

  login(){
   
    this.isSubmitted = true;
    this.formcontrol.get("email").setValidators(Validators.required);
   this.formcontrol.get("email").updateValueAndValidity();
    if (!this.formcontrol.valid) {
      return false;
   }
   else{
    if (this.formcontrol.valid) 
   {
    Object.assign(this.data, this.formcontrol.value);
    console.log(this.data);
    this.servicefile.login(this.data).subscribe((result) => {
   console.log('object');
      if (result === undefined) {
        console.log(result);
        this.errmsg = true;
    alert('service didnt proceed');
       }
       else {
       this.servicefile.sendToken(result.accessToken);
        this.myRoute.navigate(['/dashboard']);
        this.formcontrol.reset();
       }
    }, (err) => {
  alert('failed to login');
      console.log(err);
     
    });
   }
   else {
    this.valid = true;
    // this.formcontrol.reset();
  }
  
}
  
  }
  
  
 
}