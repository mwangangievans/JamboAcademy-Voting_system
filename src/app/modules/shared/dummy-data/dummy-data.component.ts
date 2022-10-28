import { Component, OnInit } from '@angular/core';
import { LoginsInterface, registerData } from 'src/app/Interfaces/Interface';

@Component({
  selector: 'app-dummy-data',
  templateUrl: './dummy-data.component.html',
  styleUrls: ['./dummy-data.component.css']
})
export class DummyDataComponent implements OnInit {

  LoginArray :LoginsInterface  []= JSON.parse(localStorage.getItem("loginDataTable")|| "[]");
  student_array: registerData[] = JSON.parse(localStorage.getItem("StudentsTable") || "[]");


  constructor() { }

  ngOnInit(): void {

for (const key in this.LoginArray) {
  if (Object.prototype.hasOwnProperty.call(this.LoginArray, key)) {
    const element = this.LoginArray[key];
        console.log(element._admission);

  }
}
  }
  GenerateLogins(){

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



  GenerateDummyData(){
    const  loginData : any = [

      {Is_voted:false,pass:1234,role:"student",student_name:"tom" , year : "First Year" , _admission:1 },
      {Is_voted:false,pass:1234,role:"student",student_name:"rose" , year : "First Year" , _admission:2 },
      {Is_voted:false,pass:1234,role:"student",student_name:"jane" , year : "First Year" , _admission:3 },
      {Is_voted:false,pass:1234,role:"student",student_name:"ken" , year : "First Second" , _admission:4 },
      {Is_voted:false,pass:1234,role:"student",student_name:"larry" , year : "First Second" , _admission:5 },
      {Is_voted:false,pass:1234,role:"student",student_name:"john" , year : "First Year" , _admission:6 },
      {Is_voted:false,pass:1234,role:"student",student_name:"faith" , year : "First Year" , _admission:7 },
      {Is_voted:false,pass:1234,role:"student",student_name:"ruth" , year : "First Year" , _admission:8 },
      {Is_voted:false,pass:1234,role:"student",student_name:"james" , year : "First Second" , _admission:9 },
      {Is_voted:false,pass:1234,role:"student",student_name:"peter" , year : "First Year" , _admission:10 }

    ];


    this.student_array.push(loginData)
    localStorage.setItem("StudentsTable", JSON.stringify(this.student_array));
  }
}
