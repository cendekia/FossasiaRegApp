import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import { Page } from "ui/page";


@Component({
	selector: "foss-home",
	templateUrl: "./modules/home/home.component.html"
})

export class HomeComponent implements OnInit {

	constructor(private router: Router, private page: Page) {}

	ngOnInit() {
		// this.page.actionBarHidden = true;
	}
}