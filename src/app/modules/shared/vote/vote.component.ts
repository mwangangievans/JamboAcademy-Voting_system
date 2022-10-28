import { Component, OnInit } from '@angular/core';
import { registerData } from 'src/app/Interfaces/Interface';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  student_array :registerData  []= JSON.parse(localStorage.getItem("StudentsTable")|| "[]");
  ElegibleCadidates  = this.student_array.filter((item)=>item.role === "cadidate")


  constructor() { }

  ngOnInit(): void {
  }

}
