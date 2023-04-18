import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { NgxSpinnerModule } from 'ngx-spinner';
// import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [SignupComponent,
                 LoginComponent,
                 UserComponent,
                 AuthenticationComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxSpinnerModule
    
  ],
  
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA]
})
export class LoginModule { }
