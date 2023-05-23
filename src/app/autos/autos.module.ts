import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVehiculosComponent } from './list-vehiculos/list-vehiculos.component';
import { DetailAutoComponent } from './detail-auto/detail-auto.component';



@NgModule({
  declarations: [
    ListVehiculosComponent,
    DetailAutoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AutosModule { }

