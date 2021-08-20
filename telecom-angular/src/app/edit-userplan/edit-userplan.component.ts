import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';
import Phone from '../models/phone';
import UserPlan from '../models/userPlan';

@Component({
  selector: 'app-edit-userplan',
  templateUrl: './edit-userplan.component.html',
  styleUrls: ['./edit-userplan.component.css']
})
export class EditUserplanComponent implements OnInit {

  @Input() userplan!: UserPlan;
  isWarning: boolean = false;
  isMoving: boolean = false;
  movingPhone!: Phone;
  movingPlan!: UserPlan;

  constructor(private activeModal: NgbActiveModal, public service: ApiService) { }

  ngOnInit(): void { }

  formatPhone(phone: string): string {
    let match = phone.match(/^(\d{3})(\d{3})(\d{4})$/);
    return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phone;
  }

  removePlan(): void {
    this.service.deleteUserplan(this.userplan.id).subscribe(result => {
      this.service.deleteLocalUserplan(this.userplan);
      this.activeModal.close();
    })
  }

  movePhone(): void {
    this.movingPhone.userPlanId = this.movingPlan.id;
    this.service.updatePhone(this.movingPhone.id, this.movingPhone).subscribe(result => {
      this.service.replacePhone(this.movingPhone);
      this.activeModal.close();
    })
  }
}
