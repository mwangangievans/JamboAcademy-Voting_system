export  interface registerData{
  student_name:string
  _admission:number
  year:string
  password:string
  role:string
  Is_voted:boolean
  position?:string
  Is_Voted_for_president?:boolean
  Is_Voted_for_School_captain?:boolean
  elected_president?:number
  elected_captain?:number
}

export  interface cadidateData{
  position:string
  Admission:number
}

export interface LoginsInterface {
  _admission:number;
  password:number;
  role:string;
  IsLogin:boolean;
}




