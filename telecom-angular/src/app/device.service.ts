import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  phoneUrl = 'http://localhost:9001/api/v1/telecom/phone';
  phonesUrl = 'http://localhost:9001/api/v1/telecom/phones';

  constructor(private http: HttpClient) { }

  getPhones(): Observable<any> {
    return this.http.get(this.phonesUrl);
  }
}
