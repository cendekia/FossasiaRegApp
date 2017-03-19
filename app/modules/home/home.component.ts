import { Component, ElementRef, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";

import { BackendService } from "../../services/backend.service";
import { FirebaseService } from '../../services/firebase.service';

import { Page } from "ui/page";


@Component({
	selector: "foss-home",
	templateUrl: "./modules/home/home.component.html"
})

export class HomeComponent implements OnInit {
	first_name: string;
    last_name: string;
    company: string;
    topic: string;
    description: string;
    github: string;
    facebook: string;
    web: string;   

	constructor(
		private router: Router,
		private page: Page,
		private ngZone: NgZone,
		private firebaseService: FirebaseService
	) {
		// alert(BackendService.speaker);
		var speaker = JSON.parse(BackendService.speaker);

		// for testing purposes
		this.first_name = speaker.first_name;
		this.last_name = speaker.last_name;
		this.company = speaker.company;
		this.topic = speaker.topic;
		this.description = speaker.description;
		this.github = speaker.github;
		this.facebook = speaker.facebook;
		this.web = speaker.web;
	}

	ngOnInit() {
		// this.page.actionBarHidden = true;
	}
}