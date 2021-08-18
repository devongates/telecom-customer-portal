import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
	
	apiService: ApiService;
	constructor(apiService: ApiService) {
		this.apiService=apiService;
	}

  ngOnInit(): void {
  }

}
