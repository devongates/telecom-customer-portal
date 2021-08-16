import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EditDeviceService } from '../edit-device.service';
import { DeviceService } from '../device.service';

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

  constructor(private editDeviceService: EditDeviceService, private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.editDeviceService.currentPhone.subscribe(phone => {
      const { id, ...rest } = phone;
      this.phoneForm.setValue(rest)
      this.id = id;
    })
  }

  onSubmit(): void {
    this.deviceService.updatePhone(this.id, this.phoneForm.value).subscribe(result => {
      console.log(result);
    });
    this.editDeviceService.changeIsEditing(false);
  }

  cancelEdit(): void {
    this.editDeviceService.changeIsEditing(false);
  }

}
