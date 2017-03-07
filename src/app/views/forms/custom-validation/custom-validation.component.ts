import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.scss']
})
export class CustomValidationComponent implements OnInit {

  private isEmailFormat(input: FormControl) {
    const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.value);
    return isEmail ? null : { needsEmail: true };
  }

  email = new FormControl('', [
    Validators.required,
    this.isEmailFormat
  ]);

  customValidationForm: FormGroup = this.builder.group({
    email: this.email
  });

  constructor(private builder: FormBuilder) { }

  consoleUser() {
    console.log(this.customValidationForm.value);
  }

  ngOnInit() {
  }

}
