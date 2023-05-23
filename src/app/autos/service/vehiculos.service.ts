import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vehiculo} from "../model/vehiculo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  private baseUrl: string = "https://gist.githubusercontent.com/alvaro-salazar/4ffb256aed5b39c626014340adfea2c6/raw/ab11f9f73f9d31966ad8b13f1b0130992981fa76/vehiculos.json";

  constructor(private httpClient: HttpClient) { }

  //Observable es parte de la interfaz reactiva de javascript (rxjs)
  getVehiculos(): Observable<Vehiculo[]>{
    return this.httpClient.get<Vehiculo[]>(this.baseUrl);
  }
}
