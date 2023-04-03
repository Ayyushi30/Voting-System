import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';



@NgModule({
  declarations: [SignupComponent,
                 LoginComponent,
                 ForgotPasswordComponent,
                 ChangepasswordComponent,
                 UserComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
