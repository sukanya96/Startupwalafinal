import { Component, OnInit, ViewChild } from '@angular/core';
import { SevicefileService } from '../sevicefile.service';
import {PostAdd} from '../Models/class';
import { Router } from '@angular/router';
import { Camera, CameraOptions, DestinationType } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-storeimg',
  templateUrl: './storeimg.page.html',
  styleUrls: ['./storeimg.page.scss'],
})
export class StoreimgPage implements OnInit {  
  //Users longitiude

  public data: PostAdd = new PostAdd();
  valid: boolean = false;
  isSubmitted = false;
  clickedImage: string;

  selectedFiles: FileList;
  currentFileUpload: File;
  imgbase;
  pickerimages: any = [];
  public formcontrol: FormGroup;


  image;
  base64temp:string="";

  images:string[]=[];
  cameraphotos:any=[];

  options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }


  constructor(private fb: FormBuilder,public service:SevicefileService,private router:Router, private camera: Camera,private file:File) { 
  this.formcontrol = this.fb.group({

    advimage: ['', [Validators.required]],
  });

  }
 /* PickfromCamera(){
    var options: CameraOptions = {
      quality:100,
      mediaType:this.camera.MediaType.PICTURE,
      destinationType:this.camera.DestinationType.FILE_URI,
      encodingType:this.camera.EncodingType.JPEG
    }
    this.camera.getPicture(options).then((imagedata) => {
     
      let filename = imagedata.substring(imagedata.lastIndexOf('/')+1);
      let path = imagedata.substring(0,imagedata.lastIndexOf('/')+1);
      this.file.readAsDataURL(path,filename).then((base64data) => {
        this.images.push(base64data);
      })
    })
  }*/

  captureImage() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.clickedImage = base64Image;
    }, (err) => {
      console.log(err);
      // Handle error
    });
  }
  
  
  add(){
    this.isSubmitted = true;
  this.data["filename"] = undefined;
    console.log(this.data["filename"]);
    for(var k = 0;k<this.images.length;k++)
    {
    if(this.data["filename"] == undefined){
      this.data["filename"] =  "products/"+ Date.now().toString() +k.toString()+ ".png";
    }
    else{
      this.data["filename"] +=  ",products/"+ Date.now().toString()+k.toString()+ ".png";
    }
    }
   for(var i = 0;i<this.images.length;i++)
    {
      
   if (this.formcontrol.valid) {
    alert('Form values are passed');
    }
  
    else {
    
    console.log('Form Valid')
      this.valid = true;
    }
  Object.assign(this.data, this.formcontrol.value);
  console.log(this.images);
  this.data["advimgbase"] = this.images[i];
  this.data["count"] = i.toString()
  
  console.log(this.data);
  
  //if (this.formcontrol.valid) {
   // alert(i);
 
  this.service.postadvertisement(this.data).subscribe((result) => {
    
     console.log(result);
    if (result === undefined) {
        console.log(result);
       }
      else {
      alert('successfully posted...')
    }
    this.router.navigate(['/dashboard']);
  }, (err) => {
      alert(JSON.stringify(err)); 
    });
  }
  }


  ngOnInit() {
  }

}
