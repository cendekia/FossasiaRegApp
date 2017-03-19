import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from '../../models/user';
import { FirebaseService } from '../../services/firebase.service';
import { Page } from "ui/page";

import dialogs = require("ui/dialogs");


@Component({
	moduleId: module.id,
	selector: "foss-register",
	templateUrl: "./register.component.html"
})

export class RegisterComponent {
	user: User;
	isLoggingIn = true;

	constructor(
		private router: Router,
		private page: Page,
		private firebaseService: FirebaseService
	) {
		this.user = new User();
		this.user.email = "";
		this.user.password = "";
	}

	signUp() {
		this.firebaseService.register(this.user)
			.then((result:any) => {

				this.firebaseService.login(this.user)
					.then(() => {
						dialogs.alert({
						    title: "Yeay!",
						    message: "Your FOSSASIA account was successfully created",
						    okButtonText: "Continue"
						}).then(() => {
						    this.router.navigate(["/home"]);
						});
					})
					.catch((message:any) => {
						// 
					});
			})
			.catch((message:any) => {
				alert(message);
			});
	}

}