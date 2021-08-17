import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { UserServiceService } from '../user-service.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private apiService: ApiService) {
	}

	ngOnInit(): void {
	}

	onSubmit(idk:any):void{
		console.log(idk);
		this.apiService.login(idk.email,idk.password);
		
	}

}
