import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { LoginComponent } from './components/login/login.component';  
import { SignupComponent } from './components/signup/signup.component'; 
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component'; 
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';  
    
const routes: Routes = [   
  {path: '', component: LoginComponent},  

  {path: 'signup', component: SignupComponent},
  {path: 'forgotpassword', component:ForgotPasswordComponent},
  {path: 'changepassword', component: ChangepasswordComponent}
];  
    
@NgModule({  
  imports: [RouterModule.forChild(routes)],  
  exports: [RouterModule]  
})  
export class LoginRoutingModule { }  