import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit{

  public otpForm !: FormGroup;
  constructor(private loginservice: LoginService,
    private _router: Router,
    private formbuilder: FormBuilder,
    private http:HttpClient
    ){

  }
  ngOnInit(): void {
    this.otpForm = this.formbuilder.group({
      phone:['',[Validators.maxLength(10),Validators.minLength(10),Validators.required]],
      otp:['',[Validators.required],Validators.maxLength(6),Validators.minLength(6)]
  })
  }

  routeToHome(){     //route to home
    this._router.navigate(['']);
  }
  
  twoFactorAuthenticate(){
    // this.loginservice.authenticate().subscribe{

    }
  

}
