import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EditDeviceService } from '../edit-device.service';
import { DeviceService } from '../device.service';
import { LocalDevicesService } from '../local-devices.service';
import { ApiService } from '../api.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Phone from '../models/phone';

@Component({
	selector: 'app-edit-device-form',
	templateUrl: './edit-device-form.component.html',
	styleUrls: ['./edit-device-form.component.css']
})
export class EditDeviceFormComponent implements OnInit {
	@Input() phone!: Phone;
	//id!: number;

	phoneForm = new FormGroup({
		phoneName: new FormControl(''),
		phoneNumber: new FormControl(''),
		phoneType: new FormControl(''),
		//userPlanId: new FormControl('')
	});

	constructor(private apiService: ApiService
		//, private editDeviceService: EditDeviceService
		//, private localDeviceService: LocalDevicesService
		, public activeModal: NgbActiveModal) { }

	ngOnInit(): void {
		const { id, userPlanId, ...rest } = this.phone;
		this.phoneForm.setValue(rest);
	}

	onSubmit(): void {
		const phone = this.phoneForm.value;
		phone.id = this.phone.id;
		phone.userPlanId = this.phone.userPlanId;
		this.apiService.updatePhone(this.phone.id, phone).subscribe(() => {

			this.apiService.replacePhone(phone);
			this.activeModal.close();
		})
	}


	deletePhone(): void {
		this.apiService.deletePhone(this.phone.id).subscribe(()=>{
			this.apiService.unappendPhone(this.phone);
		})
		// this.deviceService.deletePhone(this.id).subscribe(result => {
		//   this.localDeviceService.deletePhone(this.id);
		// })
		// this.editDeviceService.changeIsEditing(false);
	}

}
