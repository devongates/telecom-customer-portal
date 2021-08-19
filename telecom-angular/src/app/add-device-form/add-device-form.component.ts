import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  phone!: Phone;

  phoneForm = new FormGroup({
    phoneName: new FormControl(''),
    phoneNumber: new FormControl(''),
    phoneType: new FormControl(''),
    userPlanId: new FormControl('')
  });

  constructor(private service: ApiService
	,private localDeviceService: LocalDevicesService
	,public activeModal: NgbActiveModal) { }

  onSubmit(): void {
	this.activeModal.close();
    this.service.createPhone(this.phoneForm.value).subscribe(result => {
      this.localDeviceService.appendPhone(result);
	  
    })
  }

  ngOnInit(): void {
  }

}
