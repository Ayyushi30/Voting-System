import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from "ngx-spinner"; 



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})


export class LoginComponent implements OnInit {
  public loginForm !: FormGroup;   //loginform
  public otpForm!: FormGroup;      //otpform
  // isOtpEnabled: boolean;
  displayStyle = "none"


  constructor(
    private _router: Router,
    private loginservice: LoginService,
    private formbuilder: FormBuilder,
    private toast: ToastrService,
    private snackBar: MatSnackBar,
    private SpinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required],],
      // otp:['',[Validators.maxLength(6),Validators.minLength(6),Validators.required],]
    })
    this.otpForm = this.formbuilder.group({
      otp: ['', [Validators.required, Validators.minLength(6)]],
    })


  }


  routeToHome() {
    this._router.navigate(['']);
  }


  login() {
    this.SpinnerService.show(); 
    let obj = this.loginForm.value;
    this.loginservice.logIn(this.loginForm.value).subscribe((res: any) => {
      if (res) {
        this.snackBar.open('Please check your mail!','Close',{
          duration: 2000,
        });
        this.displayStyle = "block";
        this.SpinnerService.hide();  
      }
    }
      , (err) => {
        this.snackBar.open('Invalid Login Credentials','Close',{
          duration: 2000,
        });
      });
  }

  verify() {
    this.SpinnerService.show(); 
    this.loginservice.verifyOtp(this.otpForm.value).subscribe((res) => {
      if (res) {
        localStorage.setItem('token', res.token);
        console.log(res.token);
        this.loginservice.getData().subscribe(res => {
          if (res) {
            console.log(res);
            localStorage.setItem('userData', JSON.stringify(res));
          }
        });
        this.snackBar.open("LoggedIn Successfully, You can check your Voter ID in your profile.", 'Close', {
          duration: 2000,
        });
        this._router.navigate(['']);
      }
    },(err)=>{
      this.snackBar.open("Invalid OTP", 'Close', {
        duration: 2000,
      });
      // this.toast.error("Invalid OTP", 'error');
    }
    );
  }



}


function closePopup() {
  throw new Error('Function not implemented.');
}

