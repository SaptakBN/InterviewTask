import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { LogInComponent } from './Auth/log-in/log-in.component';
import { RegComponent } from './Auth/reg/reg.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { DetailsComponent } from './Component/details/details.component';
import { PnfComponent } from './Component/pnf/pnf.component';
import { authGuard } from './Guards/auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'reg',component:RegComponent},
  {path:'log-in',component:LogInComponent},
  {path:'dashboard',component:DashboardComponent, canActivate:[authGuard]},
  {path:'dashboard/details',component:DetailsComponent, canActivate:[authGuard]},
  {path:'**',component:PnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
