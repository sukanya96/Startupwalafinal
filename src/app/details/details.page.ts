import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  clickedImage: string;
  imageResponse: any;
  imgoptions: any;
  returnpath:string="";

  options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
 

  constructor(private camera: Camera,public filePath:FilePath,public fileChooser:FileChooser) { }

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

  pickFile()
  {
    this.fileChooser.open().then((fileuri)=>{
      this.filePath.resolveNativePath(fileuri).then((resolvednativepath)=>{
        this.returnpath=resolvednativepath;
      })
    })
  }

 
  
  ngOnInit() {
  }

}
