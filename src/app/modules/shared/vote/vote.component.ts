import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { registerData } from 'src/app/Interfaces/Interface';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  student_array :registerData  []= JSON.parse(localStorage.getItem("StudentsTable")|| "[]");
  ElegibleCadidates  = this.student_array.filter((item)=>item.role === "cadidate")
  ElegibleVoters  = this.student_array.filter((item)=>item.Is_voted === false)
  vote: string = "First Year";
  cadidate_name:string=""
  student_name:string="";
  @ViewChild('form') form!: NgForm
  // cadidate_name:string=""


  constructor() { }

  ngOnInit(): void {
  }
  Vote(id:number){
console.log("vote...." +id);

  }
  castVote(vote:NgForm){
    console.log(vote.value);


  }
}