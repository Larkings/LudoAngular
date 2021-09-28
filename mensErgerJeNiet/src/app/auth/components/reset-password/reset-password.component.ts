import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormValidationService } from 'src/app/service/form-validation.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  providers: [FormValidationService],
})
export class ResetPasswordComponent implements OnInit {
  public hide = true;
  constructor(private validator: FormValidationService) {}

  ngOnInit(): void {}

  onSubmit(confirm: NgForm) {
    console.log(confirm.value);
    console.log(confirm.valid);
  }
}
