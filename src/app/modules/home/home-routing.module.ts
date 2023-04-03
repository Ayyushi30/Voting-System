import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectionTypeComponent } from './components/election-type/election-type.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'electiontype', component: ElectionTypeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
