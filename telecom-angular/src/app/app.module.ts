import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { PlanCardComponent } from './plan-card/plan-card.component';
import { HttpClientModule } from '@angular/common/http';
import { DeviceComponent } from './device/device.component';
import { LoginComponent } from './login/login.component';
import { PlansComponent } from './plans/plans.component';
import { HomeComponent } from './home/home.component';
import { DevicePageComponent } from './device-page/device-page.component';
import { DeviceFormComponent } from './device-form/device-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DeviceListComponent,
    PlanCardComponent,
    DeviceComponent,
    LoginComponent,
    PlansComponent,
    HomeComponent,
    DevicePageComponent,
    DeviceFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
