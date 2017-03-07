import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Angular2 Pipes';
  submenu = [{
    name: 'Inbuilt Pipes',
    path: 'inbuilt-pipes'
  }, {
    name: 'Custom Pipes',
    path: 'custom-pipes'
  }];
  constructor() { }

  ngOnInit() {
  }

}
