import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { registerData } from 'src/app/Interfaces/Interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('form') form!: NgForm
  login_state: boolean = false;
  year: string = "First Year";
  Year_level_Array: string[] = ["First Year", "Second Year"]
  student_array: registerData[] = JSON.parse(localStorage.getItem("StudentsTable") || "[]");
  constructor() { }

  ngOnInit(): void {

    console.log(this.student_array);
  }
  loginState() {
    this.login_state = true;
  }
  registerState() {
    this.login_state = false;
  }
  onRegister(signData: NgForm) {
    if (signData.valid) {
      const StudentData: registerData = {
        ...signData.value,
        role: "student",
         Is_voted: false
      }
      console.log(typeof this.student_array);
      this.student_array.push(StudentData)
      localStorage.setItem("StudentsTable", JSON.stringify(this.student_array));
      signData.reset()

    }


  }

  onLogin(signData: NgForm) {

  }

}
