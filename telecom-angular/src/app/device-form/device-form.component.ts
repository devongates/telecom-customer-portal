import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EditDeviceService } from '../edit-device.service';

@Component({
	selector: 'app-device-form',
	templateUrl: './device-form.component.html',
	styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent implements OnInit {
	@Input() name!: string;

	isEditing: boolean = false;

	constructor(private service: EditDeviceService,
		public activeModal: NgbActiveModal) {
	}

	ngOnInit(): void {
		this.service.currentIsEditing.subscribe(isEditing => {
			this.isEditing = isEditing;
		})
	}

}
