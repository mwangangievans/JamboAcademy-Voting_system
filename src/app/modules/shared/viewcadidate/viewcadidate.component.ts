import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registerData } from 'src/app/Interfaces/Interface';

@Component({
  selector: 'app-viewcadidate',
  templateUrl: './viewcadidate.component.html',
  styleUrls: ['./viewcadidate.component.css']
})
export class ViewcadidateComponent implements OnInit {
  student_array :registerData  []= JSON.parse(localStorage.getItem("StudentsTable")|| "[]");

  ElegibleCadidates  = this.student_array.filter((item)=>item.role === "cadidate")



  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(this.ElegibleCadidates.length);

  }

  deleteCadidate(id:number){

      this.student_array = this.student_array.map((element)=>{
      let studentData : registerData = element
      if(element._admission == id){
        studentData = {
                _admission: element._admission,
                role: "student",
                Is_voted: element.Is_voted,
                student_name: element.student_name,
                pass: element.pass,
                year: element.year
              }
      }
      return studentData;
      })
      localStorage.setItem("StudentsTable", JSON.stringify( this.student_array));
      location.reload()

      // this.router.navigate(['admin/view-cadidate']);
    }


  }


