import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListVehiculosComponent} from "./autos/list-vehiculos/list-vehiculos.component";
import {CreatePaisComponent} from "./paises/create-pais/create-pais.component";

const routes: Routes = [
  {
    path: '',
    component: CreatePaisComponent,
  },
  {
    path: 'vehiculos',
    component: ListVehiculosComponent
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
