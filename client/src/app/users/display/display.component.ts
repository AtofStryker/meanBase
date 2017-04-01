import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../users-service';
import {Observable} from "rxjs/Rx";
import { User } from '../users-model';

@Component({
  selector: 'displayUser',
  templateUrl: './display.component.html'
})
export class DisplayUserComponent {
	@Input() user = new User();
	firstNameFieldDisplay = "First Name";
	lastNameFieldDisplay = "Last Name";
	addressFieldDisplay = "Address";
	companyFieldDisplay = "Company";
	isDisabled = true;

	constructor(private userService: UserService) {}
	
	ngOnInit(): void {
		this.userService._usersObservable$.subscribe(user => {
			this.user = user;
			user.address
		});
	}
}
