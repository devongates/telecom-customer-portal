import { Component, OnInit } from '@angular/core';
import UserPlan from '../models/userPlan';
import { UserplanService } from '../userplan.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-plans',
  templateUrl: './user-plans.component.html',
  styleUrls: ['./user-plans.component.css']
})
export class UserPlansComponent implements OnInit {

  userPlans: Array<UserPlan> = [];

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.service.getUserplans().subscribe(result => {
      console.log(result);

      this.userPlans = result;
    })
  }

}
