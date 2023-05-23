import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListProgramasComponent} from "./programas/list-programas/list-programas.component";

const routes: Routes = [
  {
    path: '',
    component: ListProgramasComponent
  }
]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
