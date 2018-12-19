import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './admin/add/add.component';
import { ListComponent } from './admin/list/list.component';
import { PayrollComponent } from './admin/payroll/payroll.component';
import { SummaryComponent } from './admin/summary/summary.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  // {path: '', component:AppComponent}
  {path: 'employee', component: EmployeeComponent},
  {path: 'admin', component: AdminComponent, children:[
    {path: 'add', component: AddComponent},
    {path: 'list', component: ListComponent},
    {path: 'payroll', component: PayrollComponent},
    {path: 'summary', component: SummaryComponent},
  ]},
  {path: 'logout', component: AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
