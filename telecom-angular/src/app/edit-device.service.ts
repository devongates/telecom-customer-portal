import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Phone from './models/phone';

@Injectable({
  providedIn: 'root'
})
export class EditDeviceService {

  private phoneSource = new BehaviorSubject<Phone>(new Phone);
  currentPhone = this.phoneSource.asObservable();

  private isEditingSource = new BehaviorSubject<boolean>(false);
  currentIsEditing = this.isEditingSource.asObservable();

  constructor() { }

  changePhone(phone: Phone) {
    this.phoneSource.next(phone);
  }

  changeIsEditing(isEditing: boolean) {
    this.isEditingSource.next(isEditing);
  }
}
