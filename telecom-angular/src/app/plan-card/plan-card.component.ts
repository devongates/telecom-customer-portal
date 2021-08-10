import { Component, OnInit } from '@angular/core';
import Plan from '../models/plan';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.css']
})
export class PlanCardComponent implements OnInit {

  plan: Plan = new Plan(2, 4, 35, 25);

  constructor() { }

  ngOnInit(): void {
  }

}
