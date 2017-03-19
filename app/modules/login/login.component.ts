import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import { Page } from "ui/page";


@Component({
	selector: "foss-login",
	templateUrl: "./modules/login/login.component.html"
})

export class LoginComponent implements OnInit {

	constructor(private router: Router, private page: Page) {}

	ngOnInit() {
		this.page.actionBarHidden = true;
	}

	signUp() {
		this.router.navigate(["/register"]);
	}

	signIn() {
		this.router.navigate(["/home"]);
	}
}