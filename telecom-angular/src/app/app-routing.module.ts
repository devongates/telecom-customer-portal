import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicePageComponent } from './device-page/device-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { PlansComponent } from './plans/plans.component';
import { UserPlansComponent } from './user-plans/user-plans.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/newuser', component: NewUserComponent },
  { path: 'plans', component: UserPlansComponent },
  { path: 'devices', component: DevicePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
