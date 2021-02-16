import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {  Router } from '@angular/router';
import { Login, Register,PostAdd } from '../app/Models/class';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest,HttpEvent } from '@angular/common/http';

const endpoint = 'http://localhost:3000/'
 
@Injectable({
  providedIn: 'root'
})
export class SevicefileService {
  

  httpOptions:any;
 
    constructor(private http: HttpClient, private myRoute: Router) { }
    private extractData(res: Response) {
      let body = res;
      return body || { };
   }
   
   sendToken(token: string) {
     localStorage.setItem("LoggedInUser", token)
   }
   getToken() {
    //localStorage.removeItem("LoggedInUser");
  
    return localStorage.getItem("LoggedInUser");
  }
  isLoggednIn() {  
    return this.getToken() !== null;
  }

  sendRole(role){
    localStorage.setItem("LoggedInRole", role)
  }
  getRole(){
    return localStorage.getItem("LoggedInRole");
  }
  sendId(id){
    localStorage.setItem("LoggedInUserId", id)
  }
  getId(){
    return localStorage.getItem("LoggedInUserId");
  }
  

   Register(data: Register): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'     
          })          
    };
      return this.http.post<Register>(endpoint + 'api/auth/signup' , data,this.httpOptions);
   }

   login(data: Login): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
       
          })          
    };
      return this.http.post<Login>(endpoint + 'api/auth/signin' , data,this.httpOptions); 
   }

   //Edit Profile 
   Updateprofile(data: Register): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json' ,
          'x-access-token': this.getToken()    
          })          
    };
      return this.http.put<Register>(endpoint + 'api/file/profileupdate' ,data, this.httpOptions);
   }

 userprofile(): Observable<any> {
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': this.getToken()
        })
  };

  return this.http.get<any>(endpoint + 'api/userview', this.httpOptions);
}

 //View All Users

getuserlist(): Observable<any> {
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': this.getToken()
        })
  };
  return this.http.get<any>(endpoint + 'api/userList', this.httpOptions);
}


  //Edit Profile to store in the folder

profile(file: File): Observable<HttpEvent<{}>> {
  const formdata: FormData = new FormData();
 formdata.append('file', file);
const req = new HttpRequest('POST', 'http://localhost:3000/api/file/profile', formdata, {
    reportProgress: true,
    responseType: 'text'
  });
return this.http.request(req);
}



PostAdd(): Observable<any> {
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': this.getToken()
        })
  };
  return this.http.get<any>(endpoint + 'api/adslist', this.httpOptions);
}

 postadvertisement(data: PostAdd): Observable<any> {
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
     'x-access-token': this.getToken()
        })          
  };
    return this.http.post<PostAdd>(endpoint + 'api/postadvertisement' , data,this.httpOptions); 
 }
  
  }
