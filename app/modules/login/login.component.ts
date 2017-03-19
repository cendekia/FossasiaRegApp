import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import { User } from '../../models/user';
import { FirebaseService } from '../../services/firebase.service';

import { Page } from "ui/page";



@Component({
	moduleId: module.id,
	selector: "foss-login",
	templateUrl: "./login.component.html"
})

export class LoginComponent implements OnInit {
	user: User;

	constructor(private router: Router, private page: Page, private firebaseService: FirebaseService) {
		this.user = new User();
		this.user.email = "";
		this.user.password = ""; 
	}

	ngOnInit() {
		this.page.actionBarHidden = true;
	}

	signUp() {
		this.router.navigate(["/register"]);
	}

	signIn() {
		this.firebaseService.login(this.user)
			.then(() => {
			this.router.navigate(["/home"]);
		})
		.catch((message:any) => {
			alert(message);
		});
	}
}