import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { PageRoutingModule } from './pages/page-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './nav/sidenav/sidenav.component';
import { UsernavComponent } from './nav/usernav/usernav.component';
import { AddemployeeComponent } from './pages/addemployee/addemployee.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ListemployeeComponent } from './pages/listemployee/listemployee.component';
import { EditemployeeComponent } from './pages/editemployee/editemployee.component';
import { DetailsemployeeComponent } from './pages/detailsemployee/detailsemployee.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EmployeeService } from './services/employee/employee.service'




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SidenavComponent,
    UsernavComponent,
    AddemployeeComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ListemployeeComponent,
    EditemployeeComponent,
    DetailsemployeeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    PageRoutingModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgxDatatableModule
  ],
  providers: [
    ApiService,
    AuthService,
      AuthGuard,
      EmployeeService
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
