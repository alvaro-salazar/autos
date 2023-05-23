import {Component, OnInit} from '@angular/core';
import {Programa} from "../model/programa";
import {ProgramasService} from "../service/programas.service";
//import swal from "sweetalert2";
@Component({
  selector: 'app-list-programas',
  templateUrl: './list-programas.component.html',
  styleUrls: ['./list-programas.component.css']
})
export class ListProgramasComponent implements OnInit{
  public programas: Array<Programa> = [];
  public programaSelected!: Programa;
  public selected: boolean = false;
   constructor(private programasService: ProgramasService) {
   }

   public getProgramas(){
     this.programasService.getProgramas().subscribe(
       (programas: Array<Programa>) => {
         this.programas=programas;
       }
     );
   }

  ngOnInit(): void {
     this.getProgramas();
  }

  onSelected(programa: Programa) {
     this.selected=true;
     this.programaSelected = programa;
     //swal.fire('Any fool can use a computer')
  }
}
