import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';
import Plan from '../models/plan';
import UserPlan from '../models/userPlan';

@Component({
  selector: 'app-add-plan-form',
  templateUrl: './add-plan-form.component.html',
  styleUrls: ['./add-plan-form.component.css']
})
export class AddPlanFormComponent implements OnInit {

  userId!: number;
  userPlan!: UserPlan;
  plans!: Array<Plan>;

  constructor(private service: ApiService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.service.getPlans().subscribe(result => {
      this.plans = result;
    })
    this.service.getUserData().subscribe(result => {
      this.userId = result.id;
    })
  }

  addPlan(plan: Plan) {

    const planObject = { userId: this.userId, planId: plan.id };

    this.service.createUserplan(planObject).subscribe(result => {
      const userPlan = new UserPlan();
      userPlan.userId = this.userId;
      userPlan.planId = plan.id;
      userPlan.plan = plan;
      userPlan.id = result.id;

      this.service.createLocalUserplan(userPlan);
      this.activeModal.close();
    })
  }

}
