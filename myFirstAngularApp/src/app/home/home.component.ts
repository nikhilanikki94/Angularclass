import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'myFirstAngular';
  place='Calicut';
  months=["january","February","March","April","May","June","July","August","September","October","November","December"];
  isavailabe=true;
  a=10;
  b=20;
  name='yourname';



  
   myClickFunction(){
    alert("Success");
  }

}
