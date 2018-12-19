import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './home/sign-up/sign-up.component';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './admin/add/add.component';
import { ListComponent } from './admin/list/list.component';
import { PayrollComponent } from './admin/payroll/payroll.component';
import { SummaryComponent } from './admin/summary/summary.component';
import { HttpClientModule } from '@angular/common/http';
// import { TestserviceService } from './test.service';
 

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';

// Load FusionCharts Individual Charts
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// Use fcRoot function to inject FusionCharts library, and the modules you want to use
FusionChartsModule.fcRoot(
  FusionCharts, 
  Charts,
  FusionTheme
  )

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    EmployeeComponent,
    HomeComponent,
    AdminComponent,
    AddComponent,
    ListComponent,
    PayrollComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FusionChartsModule,
    HttpClientModule
  ],
  providers: [],
  // HttpService or ServicetestService??
  bootstrap: [AppComponent]
})
export class AppModule { }
