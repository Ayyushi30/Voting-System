import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor(private http:HttpClient) { }
  public signUp(login:any){
    const url="https://d4cf-49-249-44-114.in.ngrok.io/users/sign-up";
    return this.http.post<any>(url, login);
  }

  public logIn(login:any){
    const url="https://d4cf-49-249-44-114.in.ngrok.io/users/sign-in";
    return this.http.post<any>(url, login);
  }
  public getData(){
    const url="";
    return this.http.get<any>(url)
  }
 
  
}
