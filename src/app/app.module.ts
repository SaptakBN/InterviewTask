import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { HomeComponent } from './Component/home/home.component';
import { DetailsComponent } from './Component/details/details.component';
import { RegComponent } from './Auth/reg/reg.component';
import { LogInComponent } from './Auth/log-in/log-in.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { ReactiveFormsModule } from "@angular/forms";
import { PnfComponent } from './Component/pnf/pnf.component';
import { NavBarComponent } from './fixed/nav-bar/nav-bar.component';
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from './Services/auth.service';
import { StorageService } from './Services/storage.service';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    DetailsComponent,
    RegComponent,
    LogInComponent,
    PnfComponent,
    NavBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates:true
    })
  ],
  providers: [
    AuthService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
