import { Component, OnInit } from '@angular/core';
import { registerData } from 'src/app/Interfaces/Interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tatolStudents:registerData = JSON.parse(<string>localStorage.getItem("StudentsTable")|| "[]")


  constructor() { }

  ngOnInit(): void {
    const entries = Object.entries(this.tatolStudents);

    entries.forEach((element, index, array) => {





  });

    //   entries.forEach(function (arrayItem) {
    //     var x = arrayItem + 2;
    //     console.log(x);
    // });




  }

}
