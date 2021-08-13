import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DeviceService } from '../device.service';
import User from '../models/user';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent implements OnInit {

  phoneForm = new FormGroup({
    phoneName: new FormControl(''),
    phoneNumber: new FormControl(''),
    phoneType: new FormControl(''),
    userPlanId: new FormControl('')
  });

  constructor(private service: DeviceService) { }

  onSubmit(): void {
    console.log(this.phoneForm.value);

    this.service.createPhone(this.phoneForm.value).subscribe(result => {
      console.log(result);

    })
  }

  ngOnInit(): void {
  }

}
