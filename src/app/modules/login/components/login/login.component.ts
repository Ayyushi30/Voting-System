import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit{
  public loginForm !: FormGroup;
  constructor(
    private _router: Router,
    private loginservice: LoginService,
    private formbuilder: FormBuilder,
    private http:HttpClient ){}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      phone:[''],
      password:['']
  })
  }

  
  routeToHome(){
    this._router.navigate(['home']);
  }
  login(){
    localStorage.setItem('userName',"AyushiGupta");
    this.loginservice.logIn(this.loginForm.value).subscribe((res :any)=>{
      if(res){
        console.log(res);
        localStorage.setItem('token',res.token);
        // localStorage.setItem('userName',res.userName)
        //route to home page
      }
    });

  }
 


      

}
  

