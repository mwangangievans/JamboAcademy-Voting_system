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
  SlotsToViewFor:string []=["School President" ,"Sport Captain"]
  Roles:string []=["student" ,"Cadidate","Admin"]
  display_studentRecord:boolean= true


  // ElegibleStudent  = this.student_array.filter((item)=>item.role === "student")


  firstYearsPercentage = ((this.firstYears.length/this.tatolStudents)*100)
  SecondYearspercenage = ((this.SecondYears.length/this.tatolStudents)*100)
  filteredString:string='';

  constructor() { }

  ngOnInit(): void {


    }

    addCadidate(){
     this.display_studentRecord=false
    }

    resetVotes(){

        this.student_array = this.student_array.map((element)=>{

        let studentData : registerData = element
          studentData = {
            _admission: element._admission,
            role: element.role,
            Is_voted: false,
            student_name: element.student_name,
            position:element.position,
            password: element.password,
            year: element.year,
            // Is_Voted_for_president:element.Is_Voted_for_president,
            // Is_Voted_for_School_captain:true,
            // elected_president:element.elected_president,
            // elected_captain:vote.value.cadidate_name
                }

        return studentData;
        })
        localStorage.setItem("StudentsTable", JSON.stringify( this.student_array));
       location.reload()

      }


  }


