import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginsInterface, registerData } from 'src/app/Interfaces/Interface';

@Component({
  selector: 'app-dummy-data',
  templateUrl: './dummy-data.component.html',
  styleUrls: ['./dummy-data.component.css']
})
export class DummyDataComponent implements OnInit {

  LoginArray :LoginsInterface  []= JSON.parse(localStorage.getItem("loginDataTable")|| "[]");
  student_array: registerData[] = JSON.parse(localStorage.getItem("StudentsTable") || "[]");


  constructor(private router:Router) { }

  ngOnInit(): void {

for (const key in this.LoginArray) {
  if (Object.prototype.hasOwnProperty.call(this.LoginArray, key)) {
    const element = this.LoginArray[key];
        console.log(element._admission);

  }
}
  }
  GenerateLogins(){

      const  loginData : any =  [
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



  GenerateDummyData(){

 console.log(this.student_array);

 var StudentDummyData :any = [
           { Is_voted:false, password:"1234", role:"student",student_name:"tom",year:"First Year",_admission:1},
           { Is_voted:false, password:"1234", role:"student",student_name:"ken",year:"Second Year",_admission:2},
           { Is_voted:false, password:"1234", role:"student",student_name:"tonny",year:"First Year",_admission:3},
           { Is_voted:false, password:"1234", role:"student",student_name:"john",year:"First Year",_admission:4},
           { Is_voted:false, password:"1234", role:"student",student_name:"rose",year:"Second Year",_admission:5},
           { Is_voted:false, password:"1234", role:"student",student_name:"mary",year:"First Year",_admission:6},
           { Is_voted:false, password:"1234", role:"student",student_name:"joseph",year:"Second Year",_admission:7},
           { Is_voted:false, password:"1234", role:"student",student_name:"samuel",year:"First Year",_admission:8},
           { Is_voted:false, password:"1234", role:"student",student_name:"ben",year:"Second Year",_admission:9},
           { Is_voted:false, password:"1234", role:"student",student_name:"narina",year:"First Year",_admission:10},
           { Is_voted:false, password:"1234", role:"student",student_name:"larry",year:"First Year",_admission:11},
           { Is_voted:false, password:"1234", role:"student",student_name:"kamau",year:"First Year",_admission:12},
           { Is_voted:false, password:"1234", role:"student",student_name:"peter",year:"Second Year",_admission:13},


];
    this.student_array.push(StudentDummyData)
    localStorage.setItem("StudentsTable", JSON.stringify(StudentDummyData));
    this.router.navigate(['admin/dashboard']);

  }
}
