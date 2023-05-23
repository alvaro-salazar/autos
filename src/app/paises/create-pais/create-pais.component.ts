import { Component } from '@angular/core';

@Component({
  selector: 'app-create-pais',
  templateUrl: './create-pais.component.html',
  styleUrls: ['./create-pais.component.css']
})
export class CreatePaisComponent {
  paisForm: any;

  createPais(value: any) {
    return false;

  }

}
