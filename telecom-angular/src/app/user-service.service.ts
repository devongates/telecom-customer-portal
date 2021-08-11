import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import User from './models/user';

@Injectable({
	providedIn: 'root'
})
export class UserServiceService {

	url = 'http://localhost:9001/api/v1/telecom/user';

	constructor(private http: HttpClient) { }


	getUserData(email: string, password: string):Observable<any>{
		return this.http.get(`${this.url}?email=${email}&password=${password}`);
	}
}
