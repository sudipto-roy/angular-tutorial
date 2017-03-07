import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.scss']
})
export class ModelDrivenComponent implements OnInit {
  username = new FormControl('', [Validators.required]);
  
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);

  modelDrivenForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password
  });

  constructor(private builder: FormBuilder) { }

  consoleUser () {
    console.log(this.modelDrivenForm.value);
  }

  ngOnInit() {
  }

}
