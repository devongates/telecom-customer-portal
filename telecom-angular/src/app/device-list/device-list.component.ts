import { Component, OnInit } from '@angular/core';
import Phone from '../models/phone';
import User from '../models/user';
import { DeviceService } from '../device.service';
import { LocalDevicesService } from '../local-devices.service';
import { UserServiceService } from '../user-service.service';
import { ApiService } from '../api.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeviceFormComponent } from '../device-form/device-form.component';
import { AddDeviceFormComponent } from '../add-device-form/add-device-form.component';

@Component({
	selector: 'app-device-list',
	templateUrl: './device-list.component.html',
	styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

	//user!: User;

	//deviceList: Array<Phone> = [];
	//service: UserServiceService;

	constructor(public apiService: ApiService,
		private localDeviceService: LocalDevicesService,
		public modalService: NgbModal
		) {
	}

	ngOnInit(): void {
		
		this.apiService.getUserData();
		// .subscribe(result => {
		// 	this.user = result;
		// });

		// this.apiService.getPhones().subscribe(result => {
		// 	this.localDeviceService.refreshPhones(result)
		// })
		// this.localDeviceService.currentPhones.subscribe(result => {
		// 	this.deviceList = result;
		// })
	}

	displayLines(max: number): string {
		if (max === 1) {
			return "Only one line available"
		}
		return `Up to ${max} lines available`
	}

	openCreator(id:number):void{
		const modalRef =this.modalService.open(AddDeviceFormComponent);
		modalRef.componentInstance.name="AddModal";
		modalRef.componentInstance.userPlanId=id;
	}


}
