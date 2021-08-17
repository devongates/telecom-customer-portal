import { Component, OnInit } from '@angular/core';
import Phone from '../models/phone';
import User from '../models/user';
import { DeviceService } from '../device.service';
import { LocalDevicesService } from '../local-devices.service';

@Component({
	selector: 'app-device-list',
	templateUrl: './device-list.component.html',
	styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

	user: User = new User();

	deviceList: Array<Phone> = [];

	constructor(private deviceService: DeviceService, private localDeviceService: LocalDevicesService) {
	}

	ngOnInit(): void {
		this.deviceService.getPhones().subscribe(result => {
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
