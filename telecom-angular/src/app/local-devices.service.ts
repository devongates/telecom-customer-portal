import { Injectable } from '@angular/core';
import Phone from './models/phone';
import { BehaviorSubject, Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LocalDevicesService {

  private phonesSource = new BehaviorSubject<Array<Phone>>([]);
  currentPhones = this.phonesSource.asObservable();

  constructor() { }

  refreshPhones(phones: Array<Phone>): void {
    this.phonesSource.next(phones);
  }

  appendPhone(phone: Phone): void {
    this.phonesSource.next([...this.phonesSource.getValue(), phone])
  }

  editPhone(id: number, phone: Phone): void {
    const editedPhone = { ...phone, id }
    const idx = this.phonesSource.getValue().findIndex(phone => phone.id === id);
    if (idx > -1) {
      this.phonesSource.getValue()[idx] = editedPhone;
    }
  }

  deletePhone(id: number): void {
    this.phonesSource.next(this.phonesSource.getValue().filter(phone => {
      return phone.id !== id;
    }))
  }
}
