import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MAIN COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './mainpage/home/home.component';
import { NavbarComponent } from './mainpage/navbar/navbar.component';
import { HeaderComponent } from './mainpage/header/header.component';

// MODULE COMPONENTS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
