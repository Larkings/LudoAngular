import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormValidationService } from 'src/app/service/form-validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [FormValidationService],
})
export class RegisterComponent implements OnInit {
  public hide = true;
  constructor(private validatorService: FormValidationService) {}

  ngOnInit(): void {}
  onSubmit(confirm: NgForm) {
    console.log(confirm.value);
    console.log(confirm.valid);
  }
}
