import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginsInterface, registerData } from 'src/app/Interfaces/Interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('form') form!: NgForm
  login_state: boolean = false;
  year: string = "First Year";
  Year_level_Array: string[] = ["First Year", "Second Year"]
  student_array: registerData[] = JSON.parse(localStorage.getItem("StudentsTable") || "[]");
  LoginArray :LoginsInterface  []= JSON.parse(localStorage.getItem("loginDataTable")|| "[]");

  constructor(private router:Router) { }

  ngOnInit(): void {
    const  loginData : any = [
      {_admission:1,password:1234,role:"Admin",IsLogin:false},
      {_admission:2,password:1234,role:"student",IsLogin:false},
      {_admission:3,password:1234,role:"student",IsLogin:false},
      {_admission:4,password:1234,role:"student",IsLogin:false},
      {_admission:5,password:1234,role:"student",IsLogin:false},
      {_admission:6,password:1234,role:"student",IsLogin:false},
      {_admission:7,password:1234,role:"student",IsLogin:false},
      {_admission:8,password:1234,role:"student",IsLogin:false},
      {_admission:9,password:1234,role:"student",IsLogin:false},
      {_admission:10,password:1234,role:"student",IsLogin:false},
  ];
  this.LoginArray.push(loginData)
localStorage.setItem("loginDataTable", JSON.stringify(this.LoginArray));
}
  loginState() {
    this.login_state = true;
  }
  registerState() {
    this.login_state = false;
  }
  onRegister(signData: NgForm) {
    if (signData.valid) {
      const StudentData: registerData = {
        ...signData.value,
        role: "student",
         Is_voted: false
      }
      console.log("anaglia..."+StudentData);

      this.student_array.push(StudentData)
      localStorage.setItem("StudentsTable", JSON.stringify(this.student_array));
      signData.reset()

    }


  }

  onLogin(signData: NgForm) {

      if (signData.valid) {
        console.log(signData.value);

        this.LoginArray = this.LoginArray.map((element)=>{

        let logins : LoginsInterface = element
        if(element._admission == signData.value.Admission && element.password == signData.value.password){
          logins = {
            _admission: element._admission,
            password:element.password,
            role:element.role,
            IsLogin:true

                }
        }
        return logins;
        })
      }
      localStorage.setItem("loginDataTable", JSON.stringify( this.LoginArray));
      signData.reset()
      this.router.navigate(['admin/dashboard']);


    }
  }


