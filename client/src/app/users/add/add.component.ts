import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../users-service';
import { User } from '../users-model';

@Component({
	selector: 'addUser',
	templateUrl: './add.component.html'
})
export class AddUserComponent {
	firstNameFieldDisplay = "First Name";
	firstNameFieldDisplayPlaceHolder = "Enter First Name";
	lastNameFieldDisplay = "Last Name";
	lastNameFieldDisplayPlaceHolder = "Enter Last Name";
	addressFieldDisplay = "Address";
	addressFieldDisplayPlaceHolder = "Enter Address";
	companyFieldDisplay = "Company";
	companyFieldDisplayPlaceHolder = "Enter Company";

	userForm: FormGroup;

	constructor(private formBuilder: FormBuilder, private userService: UserService) {}

	onSubmit() {
		let user = new User();
		user.firstName = this.userForm.value.firstName;
		user.lastName = this.userForm.value.lastName;
		user.address = this.userForm.value.address;
		user.company = this.userForm.value.company;

		this.userService.saveUser(user);
	}
	ngOnInit(): void {
		this.createForm();
	}

	createForm() : void{
		this.userForm = this.formBuilder.group({
			firstName: ['', [Validators.required, Validators.minLength(1)]], 
			lastName: ['', [Validators.required, Validators.minLength(1)]],
			address: ['', [Validators.required, Validators.minLength(5)]],
			company: ['', [Validators.required, Validators.minLength(3)]]
		});

		//observe the form changes
		this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));

		this.onValueChanged();
	}

	onValueChanged(data?: any) {
		if (!this.userForm) { return; }
		const form = this.userForm;

		for (const field in this.formErrors) {
			// clear previous error message (if any)
			this.formErrors[field] = '';
			const control = form.get(field);

			if (control && control.dirty && !control.valid) {
				const messages = this.validationMessages[field];
				for (const key in control.errors) {
					this.formErrors[field] += messages[key] + ' ';
				}
			}
		}
	}

	formErrors = {
		'firstName': '',
		'lastName': '',
		'address': '',
		'company': ''
	};

	validationMessages = {
		'firstName': {
			'required': 'First Name is required.',
			'minlength': 'First Name must more than 1 character long.'
		},
		'lastName': {
			'required': 'Last Name is required.',
			'minlength': 'Last Name must more than 1 character long.'
		},
		'address': {
			'required': 'Address is required.',
			'minlength': 'Address must more than 5 character long.'
		},
		'company': {
			'required': 'Company is required.',
			'minlength': 'Company must more than 3 character long.'
		}

	};
}
