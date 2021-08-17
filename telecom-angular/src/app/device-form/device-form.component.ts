import { Component, OnInit } from '@angular/core';
import { EditDeviceService } from '../edit-device.service';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent implements OnInit {

  isEditing: boolean = false;

  constructor(private service: EditDeviceService) {
  }

  ngOnInit(): void {
    this.service.currentIsEditing.subscribe(isEditing => {
      this.isEditing = isEditing;
    })
  }

}
