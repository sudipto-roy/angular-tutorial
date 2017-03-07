import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Angular2 Forms';
  submenu = [{
    name: 'Template Driven Forms',
    path: 'template-driven'
  }, {
    name: 'Model Driven Forms',
    path: 'model-driven'
  }, {
    name: 'Custom Validation',
    path: 'custom-validation'
  }];
  constructor() { }

  ngOnInit() {
  }

}
