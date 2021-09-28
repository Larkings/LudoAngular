import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { FormValidationService } from 'src/app/service/form-validation.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FormValidationService],
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor() {}

  ngOnInit(): void { }
  
  onSubmit(confirm: NgForm) {
    console.log(confirm.value);
    console.log(confirm.valid);
  }
}
