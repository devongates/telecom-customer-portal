import { Component, OnInit } from '@angular/core';
import Phone from '../models/phone';
import User from '../models/user';
import { DeviceService } from '../device.service';
import { LocalDevicesService } from '../local-devices.service';
import { UserServiceService } from '../user-service.service';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-device-list',
	templateUrl: './device-list.component.html',
	styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

	user: User = new User();

	deviceList: Array<Phone> = [];
	//service: UserServiceService;

	constructor(private apiService: ApiService, 
		//private deviceService: DeviceService, 
		private localDeviceService: LocalDevicesService) {
	}

	ngOnInit(): void {

		this.apiService.getUserData().subscribe(result => {
			this.user = result;
			console.log(this.user);
    	});

		this.apiService.getPhones().subscribe(result => {
			this.localDeviceService.refreshPhones(result)
		})
		this.localDeviceService.currentPhones.subscribe(result => {
			this.deviceList = result;
		})
	}

	displayLines(max: number): string {
		if (max === 1) {
			return "Only one line available"
		}
		return `Up to ${max} lines available`
	}


}
