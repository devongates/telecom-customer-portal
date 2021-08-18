import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import UserPlan from '../models/userPlan';

@Component({
	selector: 'app-bill',
	templateUrl: './bill.component.html',
	styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

	//plans:Array<UserPlan>;

	constructor(private apiService: ApiService) {
	}

	ngOnInit(): void {
		// this.apiService.getUserData().subscribe(result => {
		// 	this.plans = result.userPlans;
		// });
	}

}
