import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import User from './models/user';

@Injectable({
	providedIn: 'root'
})
export class UserServiceService {

	url = 'http://localhost:9001/api/v1/telecom/';
	authenticated=false;
	headers!:HttpHeaders;
	email!:string;

	constructor(private http: HttpClient) { }

	login(email:string, password:string):Observable<any>{
		
        this.headers = new HttpHeaders({
            authorization : 'Basic ' + btoa(email + ':' + password)
        });
		this.email=email;
		return this.http.get(`${this.url}auth`
				, {headers: this.headers});

    }


	getUserData():Observable<any>{
		// const headers = new HttpHeaders({
        //     authorization : 'Basic ' + btoa('user:password')
        // });
		return this.http.get(`${this.url}user?email=${this.email}`
				, {headers: this.headers});
	}
}
