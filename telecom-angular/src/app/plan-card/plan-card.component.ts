import { Component, Input, OnInit } from '@angular/core';
import Plan from '../models/plan';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.css']
})
export class PlanCardComponent implements OnInit {

  @Input() plan!: Plan;

  constructor() { }

  ngOnInit(): void {
  }

}
