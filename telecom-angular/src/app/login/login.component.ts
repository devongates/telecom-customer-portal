import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

import { UserServiceService } from '../user-service.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private apiService: ApiService, private router: Router) {
	}

	ngOnInit(): void {
	}

	onSubmit(idk:any):void{
		this.apiService.login(idk.email,idk.password,()=>{
			this.router.navigate(["devices"]);
		});
		
	}

}
