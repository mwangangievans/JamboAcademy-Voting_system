import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCadidateComponent } from './add-cadidate/add-cadidate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { ViewcadidateComponent } from './viewcadidate/viewcadidate.component';

const routes: Routes = [
  {path:'',component:MainComponent, children:[
    {path:'',redirectTo:'dashboard', pathMatch:'full'},
    {path:'dashboard',component:DashboardComponent},
    {path:'addcadidate',component:AddCadidateComponent},
    {path:'view-cadidate',component:ViewcadidateComponent}

]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
