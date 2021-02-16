import { Component, OnInit } from '@angular/core';

import { Register } from '../Models/class';
import { SevicefileService } from '../sevicefile.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {

 
  valid: boolean = false;
  errmsg: boolean = false;

  public data:Register = new Register();

  userid;
  arr;
  ar;
  role;
  email;

  admin: boolean = false;
  user: boolean = false;
  name;
  fullname;
  profilephoto;

  
  

  constructor(public service:SevicefileService) { 
  
  }

  ionViewWillEnter()
{
  this.getuserprofiles();
} 
  ngOnInit() {
  }
  getuserprofiles() {
    this.service.userprofile().subscribe((result) => {
      console.log(result);
    if (result === undefined) {
        console.log(result);
        this.errmsg = true;
      }
      else {
        /* to get userdetails */
        this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
        this.userid = this.arr[1].value;
        this.service.sendId(this.userid.id);
        this.name = this.userid.fullname;
       console.log(this.userid.name);
        this.email = this.userid.email;
      console.log(this.userid.email);
      
      }
    }, (err) => {
      console.log(err);
    });
  }

  

  update(){
    
      this.service.Updateprofile(this.data).subscribe((result) => {
       // this.upload();
        console.log(result);
        if (result === undefined) {
          console.log(result);  
        }
        else {
         alert('profile updated successfully')
         
        }
      }, (err) => {
        console.log(err);
      });
    
  }
 
}
