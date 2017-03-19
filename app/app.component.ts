import { Component } from "@angular/core";

import firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

	constructor() {
		firebase.login({
			type: firebase.LoginType.ANONYMOUS
		}).then((user) => {
			alert("user id : " + user.uid);
		}, (error) => {
			alert("error " + error);
		})
	}
}
