import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
	submitted = false;

	phoneForm = new FormGroup({
		phoneName: new FormControl('',[
			Validators.required,
     		Validators.minLength(4)
		]),
		phoneNumber: new FormControl('',[
			Validators.required,
     		Validators.pattern(/^\d{10}$/)
		]),
		phoneType: new FormControl('')
		
	});

	constructor(private apiService: ApiService
		, public activeModal: NgbActiveModal) { }

	ngOnInit(): void {
		const { id, userPlanId, ...rest } = this.phone;
		this.phoneForm.setValue(rest);
	}

	onSubmit(): void {
		this.submitted = true;
		if (this.phoneForm.valid) {
			const phone = this.phoneForm.value;
			phone.id = this.phone.id;
			phone.userPlanId = this.phone.userPlanId;
			this.apiService.updatePhone(this.phone.id, phone).subscribe(() => {

				this.apiService.replacePhone(phone);
				this.activeModal.close();
			})
		}
	}

	deletePhone(): void {
		this.apiService.deletePhone(this.phone.id).subscribe(() => {
			this.apiService.unappendPhone(this.phone);
			this.activeModal.close();
		})
	}

	get f() { return this.phoneForm.controls; }

}
