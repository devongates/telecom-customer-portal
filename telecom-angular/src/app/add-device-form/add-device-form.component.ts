import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DeviceService } from '../device.service';
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

  constructor(private service: DeviceService) { }

  onSubmit(): void {
    this.service.createPhone(this.phoneForm.value).subscribe(result => {
      console.log(result);

    })
  }

  ngOnInit(): void {
  }

}
