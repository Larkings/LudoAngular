import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from "./modules/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './modules/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AgGridModule} from "ag-grid-angular";
import {MatDialogModule} from "@angular/material/dialog";
import { ModalTextComponent } from './shared/components/modal-text/modal-text.component';
import { HomeTextComponent } from './shared/components/home-text/home-text.component';




@NgModule({
    declarations: [
        AppComponent,
        ModalTextComponent,
        HomeTextComponent
    ],
  imports: [
    AuthModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    AgGridModule.withComponents([]),
    SharedModule
  ],
    providers: [],
  exports: [
    HomeTextComponent,
    HomeTextComponent
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
