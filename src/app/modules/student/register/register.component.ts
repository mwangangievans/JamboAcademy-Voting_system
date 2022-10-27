import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { registerData } from 'src/app/Interfaces/Interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('form') form!:NgForm
  login_state : boolean = false ;

  Year_level_Array:string []=["First Year" ,"Second Year"]

  constructor() { }

  ngOnInit(): void {

  }

  loginState(){
    this.login_state = true;
  }

  registerState(){
    this.login_state = false;
  }

  onRegister(signData:registerData){
    console.log(signData);

  }

}
