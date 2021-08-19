import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditDeviceFormComponent } from '../edit-device-form/edit-device-form.component';
import { EditDeviceService } from '../edit-device.service';
import Phone from '../models/phone';

@Component({
	selector: 'app-device',
	templateUrl: './device.component.html',
	styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

	@Input() phone!: Phone;

	//isEditing: boolean;

	constructor(private service: EditDeviceService,
		public modalService: NgbModal) {
		//this.isEditing = false;
	}

	ngOnInit(): void {
	}

	openEditor() {
		const modalRef =this.modalService.open(EditDeviceFormComponent);
		modalRef.componentInstance.name="Update";
		modalRef.componentInstance.phone=this.phone;
		//modalRef.componentInstance.userPlanId=id;
		// this.service.changeIsEditing(true);
		// this.service.changePhone(this.phone);
		//window.scroll(0, 0);
	}

	formatPhone(phone: string): string {
		let match = phone.match(/^(\d{3})(\d{3})(\d{4})$/);
		return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phone;
	}

}
