import {Component, Input} from '@angular/core';
import {Vehiculo} from "../model/vehiculo";

@Component({
  selector: 'app-detail-auto',
  templateUrl: './detail-auto.component.html',
  styleUrls: ['./detail-auto.component.css']
})
export class DetailAutoComponent {
  @Input() public vehiculo!: Vehiculo; // Recibe el vehiculo desde el componente padre (autos.component.ts)


}
