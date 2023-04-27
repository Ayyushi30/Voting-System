import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { LoginComponent} from './components/login/login.component';  
import { SignupComponent } from './components/signup/signup.component'; 
import { UserComponent } from './components/user/user.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthguardGuard } from '../shared/gaurds/authguard.guard';
// import { AuthguardGuard } from '../shared/gaurds/authguard.guard';
    
const routes: Routes = [   
  {path: '',component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'user', component: UserComponent},
  {path: 'authentication', component: AuthenticationComponent},
];  
    
@NgModule({  
  imports: [RouterModule.forChild(routes)],  
  exports: [RouterModule]  
})  
export class LoginRoutingModule { }  