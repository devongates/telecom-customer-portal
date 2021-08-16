import { Component, Input, OnInit } from '@angular/core';
import { EditDeviceService } from '../edit-device.service';
import Phone from '../models/phone';

@Component({
	selector: 'app-device',
	templateUrl: './device.component.html',
	styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

	@Input() phone!: Phone;

	isEditing: boolean;

	constructor(private service: EditDeviceService) {
		this.isEditing = false;
	}

	ngOnInit(): void {
	}

	openEditor() {
		this.service.changeIsEditing(true);
		this.service.changePhone(this.phone);
	}

	formatPhone(phone: string): string {
		let match = phone.match(/^(\d{3})(\d{3})(\d{4})$/);
		return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phone;
	}

}
