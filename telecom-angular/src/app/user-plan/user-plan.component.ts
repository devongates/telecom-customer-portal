import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditUserplanComponent } from '../edit-userplan/edit-userplan.component';
import UserPlan from '../models/userPlan';

@Component({
  selector: 'app-user-plan',
  templateUrl: './user-plan.component.html',
  styleUrls: ['./user-plan.component.css']
})
export class UserPlanComponent implements OnInit {

  @Input() userPlan!: UserPlan;

  constructor(public modalService: NgbModal) {
  }

  ngOnInit(): void { }

  formatPhone(phone: string): string {
    let match = phone.match(/^(\d{3})(\d{3})(\d{4})$/);
    return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phone;
  }

  openEditor(userplan: UserPlan): void {
    const modalRef = this.modalService.open(EditUserplanComponent);
    modalRef.componentInstance.name = 'AddModal';
    modalRef.componentInstance.userplan = userplan;
  }
}
