import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { PlanCardComponent } from './plan-card/plan-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DeviceListComponent,
    PlanCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
