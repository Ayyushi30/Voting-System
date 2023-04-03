import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ElectionTypeComponent } from './components/election-type/election-type.component';
import { LoginModule } from '../login/login.module';



@NgModule({
  declarations: [
  
    HomeComponent,
    HeaderComponent,
    ElectionTypeComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule
   
  
  ]
})
export class HomeModule { }
