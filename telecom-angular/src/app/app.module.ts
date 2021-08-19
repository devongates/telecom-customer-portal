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
import { FormsModule } from '@angular/forms';

//import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { DevicePageComponent } from './device-page/device-page.component';
import { AddDeviceFormComponent } from './add-device-form/add-device-form.component';
import { EditDeviceFormComponent } from './edit-device-form/edit-device-form.component';
import { DeviceFormComponent } from './device-form/device-form.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserPlanComponent } from './user-plan/user-plan.component';
import { UserPlansComponent } from './user-plans/user-plans.component';
import { BillComponent } from './bill/bill.component';
import { AddPlanFormComponent } from './add-plan-form/add-plan-form.component';

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
    AddDeviceFormComponent,
    EditDeviceFormComponent,
    DeviceFormComponent,
    NewUserComponent,
    UserPlanComponent,
    UserPlansComponent,
    BillComponent,
    AddPlanFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
