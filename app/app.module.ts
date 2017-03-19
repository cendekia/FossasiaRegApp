import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { BackendService } from "./services/backend.service";
import { FirebaseService } from "./services/firebase.service";
import { UtilsService } from "./services/utils.service";

import { LoginComponent } from "./modules/login/login.component";
import { RegisterComponent } from "./modules/register/register.component";
import { HomeComponent } from "./modules/home/home.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent
    ],
    providers: [
        BackendService,
        FirebaseService,
        UtilsService,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {}