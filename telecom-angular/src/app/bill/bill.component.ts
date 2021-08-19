import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import UserPlan from '../models/userPlan';

@Component({
	selector: 'app-bill',
	templateUrl: './bill.component.html',
	styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

	plans!: Array<UserPlan>;
	total: number = 0;

	constructor(private apiService: ApiService) {
	}

	ngOnInit(): void {
		this.apiService.getUserData().subscribe(result => {
			if (result) {
				this.plans = result.userPlans;
				for (let plan of this.plans) {
					this.total += plan.plan.baseCost + (plan.phones.length * plan.plan.costPerLine);
				}
			}
		});
	}

}
