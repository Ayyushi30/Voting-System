import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { LoginModule } from '../login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { VoteComponent } from "./components/vote/vote.component";
import { SearchComponent } from './components/search/search.component';
import { MaterialModule } from '../material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ScrolltextComponent } from './components/scrolltext/scrolltext.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';




@NgModule({
  declarations: [
  
    HomeComponent,
    VoteComponent,
    SearchComponent,
    ConfirmationComponent,
    FooterComponent,
    CarouselComponent,
    ScrolltextComponent,
    DialogComponent,
    DashboardComponent,
    

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule,
    MaterialModule,
    NgbModule,
    SharedModule
   
  
  ],
  exports:[
    ConfirmationComponent

  ]
})
export class HomeModule { }
