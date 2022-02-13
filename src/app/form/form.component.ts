import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  //15. Templet Driven Form
  userLogin(login:any)
  {
    console.log(login);
  }


  //16.Reactive Form 
  loginFormReactive= new FormGroup({ 
    username:new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),//Validators.email
    userpassword:new FormControl('',[Validators.required,Validators.minLength(5)]),

  })

  userLoginReactive()
  {
    console.warn(this.loginFormReactive.value)
  }

  get username()
  {
    return this.loginFormReactive.get('username');
  }
  get userpassword()
  {
    return this.loginFormReactive.get("userpassword");
  }

}
