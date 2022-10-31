import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';





const MaterialComponents = [
  MatSidenavModule,
  MatDividerModule,
  MatIconModule,
  MatToolbarModule

];



@NgModule({
  declarations: [],
  imports: [MaterialComponents ],
  exports: [MaterialComponents ]
})
export class MaterialModule { }
