import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path:"",           component: DashboardComponent},
  {path:"dashboard",  component: DashboardComponent},
  {path:"form",       component: FormComponent},
  {path:"info",       component: InfoComponent},
  {path: "", redirectTo: "/", pathMatch: 'full' },
  { path: "**", redirectTo:  "/" } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
