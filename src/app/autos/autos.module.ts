import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVehiculosComponent } from './list-vehiculos/list-vehiculos.component';
import { DetailAutoComponent } from './detail-auto/detail-auto.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListVehiculosComponent,
    DetailAutoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[

  ]
})
export class AutosModule { }

