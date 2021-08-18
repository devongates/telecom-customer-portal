import { Component, OnInit, Input } from '@angular/core';
import UserPlan from '../models/userPlan';

@Component({
  selector: 'app-user-plan',
  templateUrl: './user-plan.component.html',
  styleUrls: ['./user-plan.component.css']
})
export class UserPlanComponent implements OnInit {

  @Input() userPlan!: UserPlan;

  constructor() {
  }

  ngOnInit(): void {
  }

  formatPhone(phone: string): string {
    let match = phone.match(/^(\d{3})(\d{3})(\d{4})$/);
    return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phone;
  }
}
