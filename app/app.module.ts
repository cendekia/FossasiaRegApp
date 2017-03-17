import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";

import { LoginComponent } from "./modules/login/login.component";
import { RegisterComponent } from "./modules/register/register.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
    ],
    providers: [
        // 
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {}