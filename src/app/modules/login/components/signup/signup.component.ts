import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
// import { SocialAuthService } from '@abacritt/angularx-social-login/socialauth.service';
// import { GoogleLoginProvider } from '@abacritt/angularx-social-login/providers/google-login-provider';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !: FormGroup;
  public otpVerifyForm!: FormGroup;  
  isLoggedin?: Boolean;
  showMsg: boolean = false;
  displayStyle = "none";
  private _authService: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, public loginservice: LoginService, 
    private socialAuthService: SocialAuthService, private toastr: ToastrService,private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      phone: ['',[Validators.maxLength(10),Validators.minLength(10),Validators.required]],
      age: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      area: [''],
      password: ['',[Validators.required]],
    });

    this.otpVerifyForm = this.formBuilder.group({
      otp: ['', [Validators.required, Validators.minLength(6)]],
    })
    
  }

  signUp() {
    console.log(this.signupForm);
    let obj = this.signupForm.value;
    obj.phone = obj.phone.toString();
    obj.age = obj.age.toString();
    if(this.signupForm.valid){
      this.loginservice.signUp(this.signupForm.value).subscribe(res => {
        console.log(res);
        this.snackBar.open("Registered successfully, Please login to continue.",'close',{ duration:2000,});
        this.router.navigate(['/login']);
      }, (err) => { 
        const errorFromServer= err.error.error;
        this.snackBar.open(errorFromServer,'Close', {
          duration: 2000, });
        

      }
      );
     
    }
  }
 
}
