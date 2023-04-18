import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
   
  // private path = environment.apiUrl;
  

  constructor(private http:HttpClient,) { }


  public signUp(login:any){
    const url="http://43.205.191.47:4000/api/v1/sign-up ";
    return this.http.post<any>(url, login);
  }

  public logIn(login:any){
    
    const url="http://43.205.191.47:4000/api/v1/sign-in";
    return this.http.post<any>(url, login);
  }

  public getData(){
    const url="http://43.205.191.47:4000/api/v1/profile";
    return this.http.get<any>(url);
  }

  public verifyOtp(verify:any){
    const url="http://43.205.191.47:4000/api/v1/verifyotp";
    return this.http.post<any>(url, verify);
  }
  // LoginWithGoogle(credentials: string): Observable<any> {
  //   const header = new HttpHeaders().set('content-type', 'application/json');
  //   return this.http.post(this.path + "LoginWithGoogle", JSON.stringify(credentials), { headers: header});
    
  // }

  isAuthenticated(){
    let token = localStorage.getItem('token');
    if(token){
      return true;
    }else{
      return false;
    }
  }
  authenticate(){
    const url="";
    // return this.http.post(url, twoFactorAuthenticate);
  }

 
  
}
