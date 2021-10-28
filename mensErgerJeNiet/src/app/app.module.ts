import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from "./modules/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './modules/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






@NgModule({
    declarations: [
        AppComponent,


    ],
    imports: [
        AuthModule,
        SharedModule,
        BrowserModule,
        MaterialModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
