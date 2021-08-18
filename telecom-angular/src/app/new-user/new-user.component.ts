import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import User from '../models/user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

	newUser:User;

	constructor(private apiService: ApiService, private router: Router) {
		this.newUser=new User();
	}

	ngOnInit(): void {
	}

	onSubmit(pw2:string):void{
		// this.apiService.login(idk.email,idk.password,()=>{
		// 	this.router.navigate(["devices"]);
		// });
		if(pw2===this.newUser.password){
			this.apiService.createNewUser(this.newUser,()=>{
				this.router.navigate(["devices"]);
			});
		}
		else{
			alert("passwords don't match")
		}
		
	}

}
