import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { registerData } from 'src/app/Interfaces/Interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  student_array :registerData  []= JSON.parse(localStorage.getItem("StudentsTable")|| "[]");

  tatolStudents:number = this.student_array.length ;
  firstYears  = this.student_array.filter((item)=>item.year === "First Year")
  SecondYears  = this.student_array.filter((item)=>item.year === "Second Year")
  TotalVotesCasted  = this.student_array.filter((item)=>item.Is_voted === true)
  SlotsToViewFor:string []=["School President" ,"class Rep"]
  Roles:string []=["student" ,"Cadidate","Admin"]
  display_studentRecord:boolean= true


  firstYearsPercentage = ((this.firstYears.length/this.tatolStudents)*100)
  SecondYearspercenage = ((this.SecondYears.length/this.tatolStudents)*100)
  filteredString:string='';

  constructor() { }

  ngOnInit(): void {
  console.log(this.firstYearsPercentage);
    }
  }


