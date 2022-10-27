import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cadidateData, registerData } from 'src/app/Interfaces/Interface';

@Component({
  selector: 'app-add-cadidate',
  templateUrl: './add-cadidate.component.html',
  styleUrls: ['./add-cadidate.component.css']
})
export class AddCadidateComponent implements OnInit {
  @ViewChild('form') form!:NgForm
  full_name:string = "";
  position:string = "";


  SlotsToViewFor:string []=["School President" ,"class Rep"]
  Roles:string []=["student" ,"Cadidate","Admin"]
  student_array :registerData  []= JSON.parse(localStorage.getItem("StudentsTable")|| "[]");
  cadidate_array :cadidateData  []= JSON.parse(localStorage.getItem("cadidateTable")|| "[]");


  constructor() { }

  ngOnInit(): void {



  }

  addCadisate(cadidate:NgForm){
    if(cadidate.valid){
     const cadidateData  = this.student_array.filter((item)=>item.Admission != cadidate.value.Admission)
     cadidateData


    //  console.log(typeof cadidateData);

     this.cadidate_array.push(cadidate.value)
     localStorage.setItem("cadidateTable", JSON.stringify(this.student_array));
     cadidate.reset()

   }



  }
}
