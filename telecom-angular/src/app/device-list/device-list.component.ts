import { Component, OnInit } from '@angular/core';
import Phone from '../models/phone';
import User from '../models/user';
import { DeviceService } from '../device.service';

@Component({
	selector: 'app-device-list',
	templateUrl: './device-list.component.html',
	styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

	user: User = new User();

	deviceList: Array<Phone> = [];

	constructor(private service: DeviceService) {
	}

	ngOnInit(): void {
		this.service.getPhones().subscribe(result => {
			this.deviceList = result
		})
		console.log(this.deviceList);

	}

	displayLines(max: number): string {
		if (max === 1) {
			return "Only one line available"
		}
		return `Up to ${max} lines available`
	}


}
