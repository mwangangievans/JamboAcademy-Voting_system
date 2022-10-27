import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'',loadChildren:()=>import('./modules/student/student.module').then(mod=>mod.StudentModule)},
  {path:'admin',loadChildren:()=>import('./modules/shared/shared.module').then(mod=>mod.SharedModule)},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ]
})
export class AppRoutingModule { }
