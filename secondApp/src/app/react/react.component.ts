import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {

  registerForm:FormGroup;
  submitted=false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm=this.formBuilder.group({
        firstName:['',Validators.required],
        lastName:['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required]
      })

  }


  get f() { return this.registerForm.controls};


  onSubmit(){
    this.submitted=true;



    if(this.registerForm.invalid){
      return;
    }

    alert("Success!! :-)"+this.registerForm.get("firstName").value);
  }

}
