import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  //{path: '',redirectTo: 'login', pathMatch: 'full'},
  //{path: 'login', component:LoginComponent},
  //{path: 'signup', component:SignupComponent},
  //{path: '**', component:ErrorComponent}
  {
    path:'login', 
    loadChildren: () => import('./modules/login/login.module').then(x=>x.LoginModule) 
  },

  { path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(x=>x.HomeModule) 
  }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
