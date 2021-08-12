import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { PlanCardComponent } from './plan-card/plan-card.component';
import { HttpClientModule } from '@angular/common/http';
import { DeviceComponent } from './device/device.component';
import { LoginComponent } from './login/login.component';
import { PlansComponent } from './plans/plans.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DeviceListComponent,
    PlanCardComponent,
    DeviceComponent,
    LoginComponent,
    PlansComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
