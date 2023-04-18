import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VoteComponent } from './components/vote/vote.component';
import { SearchComponent } from './components/search/search.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'vote', component: VoteComponent},
  {path:'search', component: SearchComponent},
  {path:'dashboard', component: DashboardComponent}


];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
