import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VoteComponent } from './components/vote/vote.component';
// import { SearchComponent } from './components/search/search.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthguardGuard } from '../shared/gaurds/authguard.guard';
import { DragndropComponent } from './components/dragndrop/dragndrop.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'vote', component: VoteComponent},
  {path:'dashboard', canActivate:[AuthguardGuard],component: DashboardComponent},
  {path:'dashboard',component: DashboardComponent}
  // {path:'dragndrop',component: DragndropComponent}


];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
