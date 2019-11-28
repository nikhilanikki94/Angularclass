import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE,WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService,private router:Router) { }

  ngOnInit() {
     
   
    

  }


  model: any  ={
  }
  onSubmit(){
    if((this.model.user=="nikhila" && this.model.password=="1234" )|| (this.model.user=="jango" && this.model.password=="2345"))
    {
      this.storage.set('uname',this.model.user);
      this.router.navigate(['home'])
    }
  }
}
