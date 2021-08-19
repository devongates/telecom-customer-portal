import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import Phone from './models/phone';
import UserPlan from './models/userPlan';
import { Router } from '@angular/router';
import User from './models/user';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	url = 'http://localhost:9001/api/v1/telecom/';
	heads!: HttpHeaders;

	user!: User;

	//authenticated = false;
	//headers!: HttpHeaders;
	//userId!: number;

	constructor(private http: HttpClient, private router: Router) {
		let header = localStorage.getItem("heads");
		if (header != null) {
			this.heads = new HttpHeaders({
				authorization: header
			});

			this.getUserData();
		}
	}

	getHeaders(): HttpHeaders {
		return this.heads;
	}
	getUserId(): number {
		return parseInt(localStorage.getItem("tid")!);
	}

	isAuthenticated(): boolean {
		return localStorage.getItem("tid") != null;
	}

	login(email: string, password: string, callback: any): void {
		let auth = 'Basic ' + btoa(email + ':' + password);
		let head = new HttpHeaders({
			authorization: auth
		});

		this.http.get(`${this.url}user?email=${email}`, { headers: head }).subscribe((resp) => {
			localStorage.setItem("tid", resp.toString());
			localStorage.setItem("heads", auth);
			this.heads = head;
			this.getUserData();
			callback();
		});
	}

	//@PostMapping("/user")
	//public ResponseEntity<User> createNewUser(@RequestBody @Valid User user){
	createNewUser(user: User, callback: any): void {
		this.http.post(`${this.url}newuser`, user).subscribe((resp) => {
			let auth = 'Basic ' + btoa(user.email + ':' + user.password);

			localStorage.setItem("tid", resp.toString());
			localStorage.setItem("heads", auth);

			this.heads = new HttpHeaders({
				authorization: auth
			});
			this.getUserData();

			callback();
		});
	}

	logout(): void {
		localStorage.clear();
		this.heads = new HttpHeaders();
		this.user=new User();
		//route
		this.router.navigate([""]);
	}

	getUserData(): Observable<any> {
		this.http.get(`${this.url}user/${this.getUserId()}`
			, { headers: this.getHeaders() }).subscribe(resp => {
				this.user = resp as User;
				console.log(resp);
				console.log(this.user);
			});
		return of(this.user);
	}


	//     ____  __  ______  _   ________
	//    / __ \/ / / / __ \/ | / / ____/
	//   / /_/ / /_/ / / / /  |/ / __/   
	//  / ____/ __  / /_/ / /|  / /___   
	// /_/   /_/ /_/\____/_/ |_/_____/   

	getPhones(): Observable<any> {
		return this.http.get(`${this.url}phones`
			, { headers: this.getHeaders() });
	}

	getPhone(id: String): Observable<any> {
		return this.http.get(`${this.url}phones/${id}`
			, { headers: this.getHeaders() });
	}

	createPhone(phone: Phone): Observable<any> {
		// console.log("this.header");
		// console.log(this.headers);

		return this.http.post(`${this.url}phones`, phone
			, { headers: this.getHeaders() });
	}

	updatePhone(id: number, phone: Phone): Observable<any> {
		return this.http.put(`${this.url}phones/${id}`, phone
			, { headers: this.getHeaders() });
	}

	deletePhone(id: number): Observable<any> {
		return this.http.delete(`${this.url}phones/${id}`
			, { headers: this.getHeaders() });
	}

	appendPhone(phone: Phone): void {
		for (let plan of this.user.userPlans) {

			plan.phones.forEach((ph, i) => {
				if (ph.phoneNumber === phone.phoneNumber) {
					plan.phones.splice(i, 1);
				}
			});

			if (plan.id === phone.userPlanId) {
				plan.phones.push(phone);
			}
		}
	}

	replacePhone(phone: Phone): void {
		for (let plan of this.user.userPlans) {
			if (plan.id === phone.userPlanId) {
				plan.phones.forEach((ph, i) => {
					if (ph.id === phone.id) {
						plan.phones[i] = phone;
					}
				});
			}
		}
	}
	unappendPhone(phone: Phone): void {
		for (let plan of this.user.userPlans) {
			if (plan.id === phone.userPlanId) {
				plan.phones.forEach((ph, i) => {
					if (ph.id === phone.id) {
						plan.phones.splice(i, 1);
					}
				});
			}
		}
	}

	generateRandomNumber(callback:any){

		this.http.get(`${this.url}phone/newnumber`, 
		{ headers: this.getHeaders() }).subscribe((resp) => {
			callback(resp);
		});

	}
// 	@GetMapping("/phone")
// 	public ResponseEntity<Boolean> isNumberInUse(@RequestParam (value="phonenumber") String number){
// 		return new ResponseEntity<>(service.isNumberInUse(number), HttpStatus.OK);
// 	}


	//    __  _______ __________  ____  __    ___    _   __
	//   / / / / ___// ____/ __ \/ __ \/ /   /   |  / | / /
	//  / / / /\__ \/ __/ / /_/ / /_/ / /   / /| | /  |/ / 
	// / /_/ /___/ / /___/ _, _/ ____/ /___/ ___ |/ /|  /  
	// \____//____/_____/_/ |_/_/   /_____/_/  |_/_/ |_/   

	userplansUrl = 'http://localhost:9001/api/v1/telecom/userplans';

	getUserplans(): Observable<any> {
		return this.http.get(this.userplansUrl
			, { headers: this.getHeaders() });
	}

	getUserplan(id: number): Observable<any> {
		return this.http.get(`${this.userplansUrl}/${id}`
			, { headers: this.getHeaders() });
	}

	createUserplan(userplan: UserPlan): Observable<any> {
		return this.http.post(this.userplansUrl, userplan
			, { headers: this.getHeaders() });
	}

	updateUserplan(id: number, userplan: UserPlan): Observable<any> {
		return this.http.put(`${this.userplansUrl}/${id}`, userplan
			, { headers: this.getHeaders() });
	}

	deleteUserplan(id: number): Observable<any> {
		return this.http.delete(`${this.userplansUrl}/${id}`
			, { headers: this.getHeaders() });
	}



	//     ____  __    ___    _   __
	//    / __ \/ /   /   |  / | / /
	//   / /_/ / /   / /| | /  |/ / 
	//  / ____/ /___/ ___ |/ /|  /  
	// /_/   /_____/_/  |_/_/ |_/   

	plansUrl = 'http://localhost:9001/api/v1/telecom/plans'

	getPlans(): Observable<any> {
		return this.http.get(this.plansUrl, { headers: this.getHeaders() })
	}
}
