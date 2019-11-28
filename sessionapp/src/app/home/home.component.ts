import { Component, OnInit, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router,RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService,private router:Router ) { }

address;
  ngOnInit() {
      // this.sessionVal=this.storage.get("uname");
      if(this.storage.get("uname")=='')
      {
        this.router.navigate(['']);
      }
      else{

     
               if(this.storage.get("uname")=='nikhila'){

                    this.address="thaliparamb,kannur";
                }   
                else if(this.storage.get("uname")=="jango"){

                       this.address="payyanur,kannur";
                 }
                 else{
                  this.router.navigate(['']);
                }
           }
    
      

  }


  logOut(){


      this.storage.remove('uname')
      this.router.navigate(['']);

  }

}
