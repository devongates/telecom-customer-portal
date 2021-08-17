import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Phone from './models/phone';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	url = 'http://localhost:9001/api/v1/telecom/';
	authenticated = false;
	headers!: HttpHeaders;
	//email!: string;
	userId!: number;

	constructor(private http: HttpClient) { }

	login(email: string, password: string): boolean {
		this.headers = new HttpHeaders({
			authorization: 'Basic ' + btoa(email + ':' + password)
		});

		this.http.get(`${this.url}user?email=${email}`, { headers: this.headers }).subscribe((resp) => {

			console.log('resp');
			console.log(resp);

			this.userId = parseInt(resp.toString());
		});
		return true;
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
	//             



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
}
