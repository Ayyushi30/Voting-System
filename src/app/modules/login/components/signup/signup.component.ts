import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router:Router, private loginservice: LoginService){

  }
  
  ngOnInit(): void { 
   this.signupForm = this.formBuilder.group({
    name: [''],
    email:[''],
    phone:[''],
    password:['']



   })

  }
  signUp(){
    this.loginservice.signUp(this.signupForm.value).subscribe(res=>{
      console.log(res);
      


    })

  }
}
