import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { registerData, votesInterface } from 'src/app/Interfaces/Interface';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  student_array :registerData  []= JSON.parse(localStorage.getItem("StudentsTable")|| "[]");
  president_array :votesInterface  []= JSON.parse(localStorage.getItem("SchoolPresidentTable")|| "[]");

  ElegibleCadidates  = this.student_array.filter((item)=>item.role === "cadidate")
  ElegibleVoters  = this.student_array.filter((item)=>item.Is_voted === false)
  vote: string = "First Year";
  cadidate_name:string=""
  student_name:string="";
  @ViewChild('form') form!: NgForm
  // cadidate_name:string=""


  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Vote(id:number){
console.log("vote...." +id);

  }
  votePresident(vote:NgForm){
    console.log(vote.value);
    console.log(vote.value.cadidate_name);

    if (vote.valid) {
      this.student_array = this.student_array.map((element)=>{

      let studentData : registerData = element
      if(element._admission == vote.value.voter ){

        studentData = {
                _admission: element._admission,
                role: element.role,
                Is_voted: element.Is_voted,
                student_name: element.student_name,
                position:element.position,
                password: element.password,
                year: element.year,
                Is_Voted_for_president:true,
                elected_president:vote.value.cadidate_name

              }
      }
      return studentData;
      })
    }
    localStorage.setItem("StudentsTable", JSON.stringify( this.student_array));

  }

   // vote for school captain logic

   voteschoolCaptain(vote:NgForm){
    console.log(vote.value);
    console.log(vote.value.cadidate_name);

    if (vote.valid) {
      this.student_array = this.student_array.map((element)=>{

      let studentData : registerData = element
      if(element._admission == vote.value.voter ){

        studentData = {
                _admission: element._admission,
                role: element.role,
                Is_voted: element.Is_voted,
                student_name: element.student_name,
                position:element.position,
                password: element.password,
                year: element.year,
                Is_Voted_for_president:element.Is_Voted_for_president,
                Is_Voted_for_School_captain:true,
                elected_president:element.elected_president,
                elected_captain:vote.value.cadidate_name
              }
      }
      return studentData;
      })
    }
    localStorage.setItem("StudentsTable", JSON.stringify( this.student_array));
  this.setVoted(vote.value.voter)
  }
  setVoted(id:Number){
    this.student_array = this.student_array.map((element)=>{

      let studentData : registerData = element
      if(element._admission == id && element.Is_Voted_for_School_captain==true && element.Is_Voted_for_School_captain){

        studentData = {
                _admission: element._admission,
                role: element.role,
                Is_voted: true,
                student_name: element.student_name,
                position:element.position,
                password: element.password,
                year: element.year,
                Is_Voted_for_president:element.Is_Voted_for_president,
                Is_Voted_for_School_captain:element.Is_Voted_for_School_captain,
                elected_president:element.elected_president,
                elected_captain:element.elected_captain
              }
      }
      return studentData;
      })
      localStorage.setItem("StudentsTable", JSON.stringify( this.student_array));
      this.router.navigate(['dashboard']);

    }
    computePresidentVotesCasted(){
      this.president_array = this.president_array.map((element)=>{
        let voterData : votesInterface = element
        voterData = {
          id:element.id,
          name:element.name,
          count:this.student_array.filter((item)=>item.elected_president === element.id).length
                }
        return voterData;
        })
      localStorage.setItem("SchoolPresidentTable", JSON.stringify( this.president_array));
  }
}



