import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import UserPlan from './models/userPlan';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserplanService {

  headers!: HttpHeaders;
  userplansUrl = 'http://localhost:9001/api/v1/telecom/userplans';

  constructor(private http: HttpClient, private api: ApiService) {
    api.getHeaders().subscribe(result => {
      console.log(result);

      this.headers = result;
    })
  }

  getUserplans(): Observable<any> {
    return this.http.get(this.userplansUrl, { headers: this.headers });
  }

  getUserplan(id: number): Observable<any> {
    return this.http.get(`${this.userplansUrl}/${id}`, { headers: this.headers });
  }

  createUserplan(userplan: UserPlan): Observable<any> {
    return this.http.post(this.userplansUrl, userplan, { headers: this.headers });
  }

  updateUserplan(id: number, userplan: UserPlan): Observable<any> {
    return this.http.put(`${this.userplansUrl}/${id}`, userplan, { headers: this.headers });
  }

  deleteUserplan(id: number): Observable<any> {
    return this.http.delete(`${this.userplansUrl}/${id}`, { headers: this.headers });
  }
}
