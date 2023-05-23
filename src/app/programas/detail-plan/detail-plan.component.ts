import {Component, Input} from '@angular/core';
import {Programa} from "../model/programa";

@Component({
  selector: 'app-detail-plan',
  templateUrl: './detail-plan.component.html',
  styleUrls: ['./detail-plan.component.css']
})
export class DetailPlanComponent {
   @Input() public programa!: Programa;


}
