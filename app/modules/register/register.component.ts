import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { User } from '../../models/user';
import { Speaker } from '../../models/speaker';

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
	
	id: string;
    first_name: string;
    last_name: string;
    company: string;
    topic: string;
    description: string;
    github: string;
    facebook: string;
    web: string;   
    approved: boolean;
    UID: string;
	public speaker: Speaker;
	
	isLoggingIn = true;

	constructor(
		private router: Router,
		private page: Page,
		private firebaseService: FirebaseService
	) {
		this.user = new User();
		this.user.email = "";
		this.user.password = "";

		// for testing purposes
		// this.user.email = "me@cendekiapp.com";
		// this.user.password = "qwerty12345";
		// this.first_name = "John";
		// this.last_name = "Doe";
		// this.company = "John Inc.";
		// this.topic = "FOSSASIA Awesome";
		// this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique gravida eros, quis maximus diam. Nam in vestibulum odio, in maximus ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vitae neque luctus, posuere leo et, dapibus lorem. Nam fermentum, nulla eget bibendum faucibus, nulla tortor dignissim tortor, et tempor elit dolor id magna. Etiam interdum aliquet neque sed iaculis. Pellentesque elementum posuere scelerisque. Duis in leo est. Nam nec porttitor elit, non consectetur augue. Donec vehicula, sapien quis molestie finibus, magna quam accumsan urna, a imperdiet arcu lorem pretium est. Nam molestie, dolor sed porta porttitor, ipsum lectus tincidunt massa, quis bibendum erat lorem ut massa. Aenean commodo arcu sed dictum dignissim.";
		// this.github = "https//github.com/cendekiapp";
		// this.facebook = "https://www.facebook.com/cendekia.pramana.putra";
		// this.web = "http://cendekiapp.com";  
		// this.approved = false;  
	}

	signUp() {
		this.firebaseService.register(this.user)
			.then((result:any) => {

				this.firebaseService.login(this.user)
					.then(() => {
							this.UID = "";
							this.approved = false;
						    this.speaker = new Speaker(
						    		this.UID,
								    this.first_name,
								    this.last_name,
								    this.company,
								    this.topic,
								    this.description,
								    this.github,
								    this.facebook,
								    this.web,  
								    this.approved
								);

						    let speakerData:string = JSON.stringify(this.speaker);
						    
						    this.firebaseService.add(speakerData).then((message:any) => {
						    	dialogs.alert({
								    title: "Yeay!",
								    message: "Your FOSSASIA speaker proposal was successfully submitted",
								    okButtonText: "Continue"
								}).then(() => {
								    this.router.navigate(["/home"]);
								});
						    })   
					})
					.catch((message:any) => {
						alert(message);
					});
			})
			.catch((message:any) => {
				alert(message);
			});
	}

}