import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-pais',
  templateUrl: './create-pais.component.html',
  styleUrls: ['./create-pais.component.css']
})

export class CreatePaisComponent implements OnInit {

  public paisForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }
/*
* const form = new FormGroup({
  first: new FormControl('Nancy', Validators.minLength(2)),
  last: new FormControl('Drew'),
});

* */
  ngOnInit(): void {
    this.paisForm = this.formBuilder.group({
      nombre:["",[Validators.required, Validators.minLength(3)]]
    });
  }

  createPais(value: any) {
    return false;

  }

}
