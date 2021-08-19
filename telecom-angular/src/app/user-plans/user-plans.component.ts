import { Component, OnInit } from '@angular/core';
import UserPlan from '../models/userPlan';
// import { UserplanService } from '../userplan.service';
import { ApiService } from '../api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPlanFormComponent } from '../add-plan-form/add-plan-form.component';

@Component({
  selector: 'app-user-plans',
  templateUrl: './user-plans.component.html',
  styleUrls: ['./user-plans.component.css']
})
export class UserPlansComponent implements OnInit {

  userPlans: Array<UserPlan> = [];
  userId!: number;

  constructor(private service: ApiService, public modalService: NgbModal) { }

  ngOnInit(): void {
    this.service.getUserplans().subscribe(result => {
      this.userPlans = result;
    })
    this.service.getUserData().subscribe(result => {
      this.userId = result.id;
    })
  }

  openCreator(userId: number): void {
    const modalRef = this.modalService.open(AddPlanFormComponent);
    modalRef.componentInstance.name = "AddModal";
    modalRef.componentInstance.userId = userId;
  }

}
