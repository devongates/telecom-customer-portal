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
	submitted=false;
	badPw=false;
	badRequest=false;
	newUser:User;

	constructor(private apiService: ApiService, private router: Router) {
		this.newUser=new User();
	}

	ngOnInit(): void {
	}

	onSubmit(pw2:string):void{
		this.submitted=true;
		this.badRequest=false;
		if(pw2===this.newUser.password){
			this.badPw=false;
			this.badRequest=false;
			this.apiService.createNewUser(this.newUser,()=>{
				this.router.navigate(["devices"]);
			},(err)=>{
				this.badRequest=true;
			});
		}
		else{
			this.badPw=true;
		}
		
	}

}
