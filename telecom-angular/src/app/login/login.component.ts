import { Component, OnInit } from '@angular/core';

import { UserServiceService } from '../user-service.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	service: UserServiceService;

	constructor(service: UserServiceService) {
		this.service = service;

	}
	ngOnInit(): void {
	}

	onSubmit(idk:any):void{
		console.log(idk);
		this.service.login(idk.email,idk.password).subscribe((response)=>{
			console.log(response);
		});
		
	}

}
