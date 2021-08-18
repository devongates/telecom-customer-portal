import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import UserPlan from './models/userPlan';

@Injectable({
  providedIn: 'root'
})
export class UserplanService {

  userplansUrl = 'http://localhost:9001/api/v1/telecom/userplans';

  constructor(private http: HttpClient) { }

  getUserplans(): Observable<any> {
    return this.http.get(this.userplansUrl);
  }

  getUserplan(id: number): Observable<any> {
    return this.http.get(`${this.userplansUrl}/${id}`);
  }

  createUserplan(userplan: UserPlan): Observable<any> {
    return this.http.post(this.userplansUrl, userplan);
  }

  updateUserplan(id: number, userplan: UserPlan): Observable<any> {
    return this.http.put(`${this.userplansUrl}/${id}`, userplan);
  }

  deleteUserplan(id: number): Observable<any> {
    return this.http.delete(`${this.userplansUrl}/${id}`);
  }
}
