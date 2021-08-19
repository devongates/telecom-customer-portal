import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EditDeviceService } from '../edit-device.service';
import { DeviceService } from '../device.service';
import { LocalDevicesService } from '../local-devices.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-device-form',
  templateUrl: './edit-device-form.component.html',
  styleUrls: ['./edit-device-form.component.css']
})
export class EditDeviceFormComponent implements OnInit {

  id!: number;

  phoneForm = new FormGroup({
    phoneName: new FormControl(''),
    phoneNumber: new FormControl(''),
    phoneType: new FormControl(''),
    userPlanId: new FormControl('')
  });

  constructor(private editDeviceService: EditDeviceService, private deviceService: ApiService, private localDeviceService: LocalDevicesService) { }

  ngOnInit(): void {
    this.editDeviceService.currentPhone.subscribe(phone => {
      const { id, ...rest } = phone;
      this.phoneForm.setValue(rest)
      this.id = id;
    })
  }

  onSubmit(): void {
    const phone = this.phoneForm.value;
    this.deviceService.updatePhone(this.id, phone).subscribe(result => {
      this.localDeviceService.editPhone(this.id, phone);
    });
    this.editDeviceService.changeIsEditing(false);
  }

  cancelEdit(): void {
    this.editDeviceService.changeIsEditing(false);
  }

  deletePhone(): void {
    this.deviceService.deletePhone(this.id).subscribe(result => {
      this.localDeviceService.deletePhone(this.id);
    })
    this.editDeviceService.changeIsEditing(false);
  }

}
