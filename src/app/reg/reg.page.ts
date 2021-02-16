import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController, } from '@ionic/angular';
import { Register } from '../Models/class';
import {SevicefileService } from '../sevicefile.service'

@Component({
  selector: 'app-reg',
  templateUrl: './reg.page.html',
  styleUrls: ['./reg.page.scss'],
})
export class RegPage implements OnInit {
  public formcontrol : FormGroup;
  valid: boolean;
  errmsg: any;
  public formValid = true;
  showMsg: boolean = false;
  isSubmitted = false;
public data: Register = new Register;
  constructor(public fb: FormBuilder, private alertCtrl: AlertController,public service:SevicefileService,
    private modalCtrl: ModalController, private myRoute: Router) { 

    this.formcontrol = this.fb.group({
      fullname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), (Validators.maxLength(20)), 
      (Validators.minLength(5))]],
      email: ['', [Validators.required,Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
       
   });
  }

  ngOnInit() {
    this.register();
    this.valid=false;
    this.errmsg=false;
    this.isSubmitted = false;
  }
  
  get errorControl() {
    return this.formcontrol.controls;
  }

  register() {
      this.isSubmitted = true;
      if (!this.formcontrol.valid) {
        console.log('Please provide all the required values!')
        return false;
      } else {
        if(this.formcontrol.valid){
          Object.assign(this.data, this.formcontrol.value);
       this.service.Register(this.data).subscribe((result)=>{
         if(result==undefined){
           console.log(result);
           this.errmsg= true;
           alert('Sorry, Failed...!')

        }

         else{
          this.formcontrol.reset();
           alert('Congrats on the Registeration...!')
            this.myRoute.navigate(['/login']);
         };
       },(err)=>{
         console.log(err);
         alert('Sorry, Failed...!')
       });
        }
        else{
         this.valid=true; 
         this.formcontrol.reset();
        }
       
      }
    }

}
