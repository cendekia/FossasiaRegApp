import { Injectable } from "@angular/core";
import { getString, setString } from "application-settings";

const tokenKey = "token";

export class BackendService {
  static apiUrl = "https://fossasia-reg-app.firebaseio.com/";

  static isLoggedIn(): boolean {
    return !!getString("token");
  }

  static get token(): string {
    return getString("token");
  }

  static set token(theToken: string) {
    setString("token", theToken);
  }

  static get speaker(): string {
    return getString("speaker");
  }

  static set speaker(theData: string) {
    setString("speaker", theData);
  }
}
