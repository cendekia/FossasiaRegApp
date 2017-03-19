import {Injectable, NgZone} from "@angular/core";
import { User } from "../models/user";
import { BackendService } from "./backend.service";
import firebase = require("nativescript-plugin-firebase");
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {UtilsService} from './utils.service';
import 'rxjs/add/operator/share';

@Injectable()
export class FirebaseService {
    constructor(
        private ngZone: NgZone,
        private utils: UtilsService
    ){}
    
    register(user: User) {
        return firebase.createUser({
        email: user.email,
        password: user.password
    }).then(
        function (result:any) {
            return JSON.stringify(result);
        },
        function (errorMessage:any) {
            alert(errorMessage);
        }
    )}

    login(user: User) {
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: user.email,
            password: user.password
        }).then((result: any) => {
            BackendService.token = result.uid;
            return JSON.stringify(result);
        }, (errorMessage: any) => {
            alert(errorMessage);
        });
    }

    logout(){
        BackendService.token = "";
        firebase.logout();    
    }

    add(speakerData: string) {  
        var speakerParse = JSON.parse(speakerData); 
        return firebase.push(
                "/Speakers",
                {
                    "first_name": speakerParse.first_name, 
                    "last_name": speakerParse.last_name, 
                    "company": speakerParse.company, 
                    "topic": speakerParse.topic, 
                    "description": speakerParse.description,
                    "github": speakerParse.github,
                    "facebook": speakerParse.facebook,
                    "web": speakerParse.web,
                    "UID": BackendService.token
                }
            ).then(
                function (result:any) {
                return 'Registered!';
            },
            function (errorMessage:any) {
                console.log(errorMessage);
            }); 
    }
}