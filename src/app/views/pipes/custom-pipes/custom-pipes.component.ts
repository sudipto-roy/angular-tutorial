import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.scss']
})
export class CustomPipesComponent implements OnInit {
  ascending: boolean = true;
  title:string = "Sapient Razorfish";
  names = [{"id": 1,"first_name": "Jason","last_name": "Martin"}, 
     {"id": 2,"first_name": "Douglas","last_name": "Holmes"}, 
     {"id": 3,"first_name": "Randy","last_name": "Woods"}, 
     {"id": 4,"first_name": "Thomas","last_name": "Castillo"}, 
     {"id": 5,"first_name": "Ryan","last_name": "Butler"}, 
     {"id": 6,"first_name": "Jose","last_name": "Turner"}, 
     {"id": 7,"first_name": "Carl","last_name": "Taylor"}, 
     {"id": 8,"first_name": "Brandon","last_name": "Mendoza"}, 
     {"id": 9,"first_name": "Willie","last_name": "Ross"}, 
     {"id": 10,"first_name": "Howard","last_name": "Montgomery"}];
  constructor() { }

  ngOnInit() {
  }

}
