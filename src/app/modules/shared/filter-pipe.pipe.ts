import { Pipe, PipeTransform } from '@angular/core';
import { registerData } from 'src/app/Interfaces/Interface';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: registerData[],filteredString:string)
  {

    if(value.length === 0 || filteredString==='')
    return value;

  const  Parcels = [];
    for ( const student of value){
     if(student.full_name.toLowerCase().indexOf(filteredString.toLocaleLowerCase())!==-1){
      Parcels.push(student)
     }
    }
    return Parcels;  }


}
