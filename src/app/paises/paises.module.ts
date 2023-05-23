import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePaisComponent } from './create-pais/create-pais.component';
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    CreatePaisComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PaisesModule { }
