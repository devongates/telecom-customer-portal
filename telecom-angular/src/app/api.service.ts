import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import Phone from './models/phone';
import UserPlan from './models/userPlan';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	url = 'http://localhost:9001/api/v1/telecom/';
	authenticated = false;
	headers!: HttpHeaders;
	userId!: number;

	constructor(private http: HttpClient, private router: Router) { }

	getHeaders() {
		return of(this.headers)
	}

	login(email: string, password: string, callback: any): void {
		this.headers = new HttpHeaders({
			authorization: 'Basic ' + btoa(email + ':' + password)
		});

		this.http.get(`${this.url}user?email=${email}`, { headers: this.headers }).subscribe((resp) => {
			this.userId = parseInt(resp.toString());
			this.authenticated = true;
			callback();
		});
	}

	logout(): void {
		this.userId = 0;
		this.headers = new HttpHeaders();
		this.authenticated = false;
		//route
		this.router.navigate([""]);
	}


	getUserData(): Observable<any> {
		return this.http.get(`${this.url}user/${this.userId}`
			, { headers: this.headers });
	}



	//     ____  __  ______  _   ________
	//    / __ \/ / / / __ \/ | / / ____/
	//   / /_/ / /_/ / / / /  |/ / __/   
	//  / ____/ __  / /_/ / /|  / /___   
	// /_/   /_/ /_/\____/_/ |_/_____/   

	getPhones(): Observable<any> {
		return this.http.get(`${this.url}phones`
			, { headers: this.headers });
	}

	getPhone(id: String): Observable<any> {
		return this.http.get(`${this.url}phones/${id}`
			, { headers: this.headers });
	}

	createPhone(phone: Phone): Observable<any> {
		return this.http.post(`${this.url}phones`, phone
			, { headers: this.headers });
	}

	updatePhone(id: number, phone: Phone): Observable<any> {
		return this.http.put(`${this.url}phones/${id}`, phone
			, { headers: this.headers });
	}

	deletePhone(id: number): Observable<any> {
		return this.http.delete(`${this.url}phones/${id}`
			, { headers: this.headers });
	}



	//    __  _______ __________  ____  __    ___    _   __
	//   / / / / ___// ____/ __ \/ __ \/ /   /   |  / | / /
	//  / / / /\__ \/ __/ / /_/ / /_/ / /   / /| | /  |/ / 
	// / /_/ /___/ / /___/ _, _/ ____/ /___/ ___ |/ /|  /  
	// \____//____/_____/_/ |_/_/   /_____/_/  |_/_/ |_/   

	userplansUrl = 'http://localhost:9001/api/v1/telecom/userplans';

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
