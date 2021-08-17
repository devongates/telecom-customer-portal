import { Injectable } from '@angular/core';
import Phone from './models/phone';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LocalDevicesService {

  private phones: Array<Phone> = []

  constructor() { }

  getLocalDevices(): Observable<Array<Phone>> {
    return of(this.phones);
  }

  appendPhones(phones: Array<Phone>): void {
    for (const phone of phones) {
      this.phones.push(phone);
    }
  }

  appendPhone(phone: Phone): void {
    this.phones.push(phone);
  }

  editPhone(id: number, phone: Phone): void {
    const editedPhone = { ...phone, id }
    const idx = this.phones.findIndex(phone => phone.id === id);
    if (idx > -1) {
      this.phones[idx] = editedPhone;
    }
  }

  deletePhone(id: number): void {
    const idx = this.phones.findIndex(phone => phone.id === id);
    if (idx > -1) {
      this.phones.splice(idx, 1);
    }
  }
}
