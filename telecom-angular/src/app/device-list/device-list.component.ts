import { Component, OnInit } from '@angular/core';
import Device from '../models/device';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  deviceList: Array<Device> = [
    new Device(1, 'Devon\'s phone', '1234567890', 'super'),
    new Device(2, 'Todd\'s phone', '0123456789', 'basic'),
    new Device(3, 'Todd\'s other phone', '2345678901', 'unlimited')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
