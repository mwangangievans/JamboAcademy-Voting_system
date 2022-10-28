import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { cadidateData, registerData } from 'src/app/Interfaces/Interface';

@Component({
  selector: 'app-add-cadidate',
  templateUrl: './add-cadidate.component.html',
  styleUrls: ['./add-cadidate.component.css']
})
export class AddCadidateComponent implements OnInit {
  @ViewChild('form') form!: NgForm
  student_name: string = "";
  position: string = "";


  SlotsToViewFor: string[] = ["School President", "Sport Captain"]
  Roles: string[] = ["student", "Cadidate", "Admin"]
  student_array :registerData  []= JSON.parse(localStorage.getItem("StudentsTable")|| "[]");

  cadidate_array: any[] = JSON.parse(localStorage.getItem("cadidateTable") || "[]");

  ElegibleCadidates  = this.student_array.filter((item)=>item.role === "student")

  constructor(private router:Router) { }

  ngOnInit(): void {

// console.log(this.student_array);

  }

  addCadisate(cadidate: NgForm) {
    if (cadidate.valid) {
      this.student_array = this.student_array.map((element)=>{

      let studentData : registerData = element
      if(element._admission == cadidate.value.student_name){
        studentData = {
                _admission: element._admission,
                role: "cadidate",
                Is_voted: element.Is_voted,
                student_name: element.student_name,
                position: cadidate.value.position,
                pass: element.pass,
                year: element.year
              }
      }
      return studentData;
      })
    }
    localStorage.setItem("StudentsTable", JSON.stringify( this.student_array));
    cadidate.reset()
    this.router.navigate(['admin/view-cadidate']);
  }

}

