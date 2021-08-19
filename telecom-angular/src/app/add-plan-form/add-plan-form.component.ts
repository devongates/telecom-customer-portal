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

  @Input() userId!: number;
  userPlan!: UserPlan;
  plans!: Array<Plan>;

  constructor(private service: ApiService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.service.getPlans().subscribe(result => {
      console.log(result);
      this.plans = result;
    })
  }

}
