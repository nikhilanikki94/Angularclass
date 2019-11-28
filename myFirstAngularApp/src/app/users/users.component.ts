import { Component, OnInit } from '@angular/core';
import  {GetusersService } from '../getusers.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userdata;

  constructor(private serviceObject:GetusersService) {

   

   }

  ngOnInit() {
  }



getUsers(){
  this.serviceObject.getUserService()
  .subscribe((users)=>{

    this.userdata=users;

  })
  // return this.userdata
}


}

