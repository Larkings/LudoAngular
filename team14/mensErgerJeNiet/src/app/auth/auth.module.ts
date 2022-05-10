import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { MaterialModule } from '../modules/material.module';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent],
  imports: [CommonModule, AuthRoutingModule, MaterialModule, FormsModule],
  exports: [LoginComponent, RegisterComponent, ResetPasswordComponent],
  providers: [

  ],
})
export class AuthModule {}
