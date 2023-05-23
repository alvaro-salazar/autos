import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProgramasComponent } from './list-programas/list-programas.component';
import { DetailPlanComponent } from './detail-plan/detail-plan.component';



@NgModule({
  declarations: [
    ListProgramasComponent,
    DetailPlanComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlanesModule { }
