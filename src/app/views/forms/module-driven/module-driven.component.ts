import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-module-driven',
  templateUrl: './module-driven.component.html',
  styleUrls: ['./module-driven.component.scss']
})
export class ModuleDrivenComponent implements OnInit {
  username = new FormControl('', [Validators.required]);
  
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);

  moduleDrivenForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password
  });

  constructor(private builder: FormBuilder) { }

  consoleUser () {
    console.log(this.moduleDrivenForm.value);
  }

  ngOnInit() {
  }

}
