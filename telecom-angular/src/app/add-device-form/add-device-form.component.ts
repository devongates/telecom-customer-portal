import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';
import { DeviceService } from '../device.service';
import { LocalDevicesService } from '../local-devices.service';
import Phone from '../models/phone';

@Component({
	selector: 'app-add-device-form',
	templateUrl: './add-device-form.component.html',
	styleUrls: ['./add-device-form.component.css']
})
export class AddDeviceFormComponent implements OnInit {
	@Input() userPlanId!:number;
	phone!: Phone;
	submitted=false;


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

	constructor(private service: ApiService
		, private localDeviceService: LocalDevicesService
		, public activeModal: NgbActiveModal) { }

	onSubmit(): void {
		this.submitted=true;
		if(this.phoneForm.valid){
			let phone=this.phoneForm.value;
			phone.userPlanId=this.userPlanId;
			this.service.createPhone(phone).subscribe(result => {
				//this.localDeviceService.appendPhone(result);
				this.service.appendPhone(result);
				this.activeModal.close();
			})
		}
	}

	ngOnInit(): void {
	}

	get f() { return this.phoneForm.controls; }
	randomize():void{
		
		this.service.generateRandomNumber((num:string)=>{
			let temp =this.phoneForm.value;
			temp.phoneNumber =num;
			this.phoneForm.setValue(temp);
		});
	}

}
