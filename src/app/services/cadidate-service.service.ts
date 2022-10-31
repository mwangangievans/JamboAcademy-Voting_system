import { Injectable } from '@angular/core';
import { registerData } from '../Interfaces/Interface';

@Injectable({
  providedIn: 'root'
})
export class CadidateServiceService {
  student_array: registerData[] = []



  constructor() {
    this.student_array =  JSON.parse(localStorage.getItem('StudentsTable')!);
  }

  filterPresidentResult(): registerData[]{
    const student_array: registerData[] = JSON.parse(localStorage.getItem('StudentsTable')!)
    return student_array.filter((president: registerData) => {
      if (president){
        return (president.elected_president !== undefined);
      }else{
        return null
      }
    })
  }

  filterPresidentialResults(){
    const castedVotes = this.filterPresidentResult()
    const presidentCandidates = JSON.parse(localStorage.getItem('SchoolPresidentTable')!)
  }

  filterPresidentialCadidate(position: string){
    const student_array: registerData[] = JSON.parse(localStorage.getItem('StudentsTable')!)
    const data = student_array.filter(candidate => {
      if (candidate.position){
        return (candidate.position == position)
      } else{
        return null
      }
    })
    localStorage.setItem(position.split(' ').join('')+"Table", JSON.stringify(data))
  }

  getResults(position: string){
    const positionCandidates: any[] = JSON.parse(localStorage.getItem((position.split(' ').join('')+"Table"))!)
    const students: any[] = JSON.parse(localStorage.getItem('StudentsTable')!)
    if(positionCandidates){
      positionCandidates.map(positionCandidate => {
        let count = 0
        students.map(student => {
        if(position == 'School President'){
          if (positionCandidate._admission == student.elected_president){
            count += 1
          }
        }
        if(position == 'Sport Captain'){
          if (positionCandidate._admission == student.elected_captain){
            count += 1
          }
        }
        })
        positionCandidate['count'] = count
      })
    }
    return positionCandidates

  }

}
