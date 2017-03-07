import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuilt-pipes',
  templateUrl: './inbuilt-pipes.component.html',
  styleUrls: ['./inbuilt-pipes.component.scss']
})
export class InbuiltPipesComponent implements OnInit {
  price = 100.001;
  product: string = "Patanjali Beer"

  constructor() { }

  ngOnInit() {
  }

}
