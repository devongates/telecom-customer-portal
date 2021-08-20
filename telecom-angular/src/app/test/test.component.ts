import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddDeviceFormComponent } from '../add-device-form/add-device-form.component';
import { ApiService } from '../api.service';
import { LocalDevicesService } from '../local-devices.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


	constructor(public apiService: ApiService,
		private localDeviceService: LocalDevicesService,
		public modalService: NgbModal) {
	}

	ngOnInit(): void {
		//this.apiService.getUserData();
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
