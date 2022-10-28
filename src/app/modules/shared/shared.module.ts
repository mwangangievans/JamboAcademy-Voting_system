import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCadidateComponent } from './add-cadidate/add-cadidate.component';
import { ViewcadidateComponent } from './viewcadidate/viewcadidate.component';
import { VoteComponent } from './vote/vote.component';
import { DummyDataComponent } from './dummy-data/dummy-data.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    MainComponent,
    FilterPipePipe,
    AddCadidateComponent,
    ViewcadidateComponent,
    VoteComponent,
    DummyDataComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
