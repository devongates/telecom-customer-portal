import { Component, OnInit } from '@angular/core';
import Phone from '../models/phone';
import User from '../models/user';
import { UserServiceService } from '../user-service.service';

@Component({
	selector: 'app-device-list',
	templateUrl: './device-list.component.html',
	styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

	service: UserServiceService;
	user: User =new User();

	deviceList: Array<Phone> = [
		new Phone(1, 'Devon\'s phone', '1234567890', 'super'),
		new Phone(2, 'Todd\'s phone', '0123456789', 'basic'),
		new Phone(3, 'Todd\'s other phone', '2345678901', 'unlimited')
	];

	constructor(service: UserServiceService) {
		this.service=service;

	}

	ngOnInit(): void {
		this.service.getUserData("todd@emert.com","1234").subscribe(result=>{
			this.user=result;
			console.log(this.user);

			
		});
	}

}
