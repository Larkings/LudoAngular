import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  public hide = true;
  constructor() {}

  onSubmit(confirm: NgForm) {
    console.log(confirm.value);
    console.log(confirm.valid);
  }
}
