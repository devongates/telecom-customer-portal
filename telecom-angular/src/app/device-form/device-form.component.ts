import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent implements OnInit {

  phoneForm = new FormGroup({
    name: new FormControl(''),
    phoneNumber: new FormControl(''),
    phoneType: new FormControl('')
  });

  constructor() { }

  onSubmit(): void {
    console.log(this.phoneForm.value);
    // TODO: Send to db and append to device list

  }

  ngOnInit(): void {
  }

}
