import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
import { PageRoutingModule } from './pages/page-routing.module';

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
    AppRoutingModule
  ],
  providers: [
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
