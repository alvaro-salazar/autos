import {Injectable} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Pais} from "../model/Pais";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  //Se define la url del servicio REST
  private urlEndPoint: string = 'http://localhost:8081/pais-service/paises';

  //Metodo para crear un pais con HttpClient por el metodo POST
  save(pais: any): Observable<Pais> {
    return this.httpClient.post<Pais>(this.urlEndPoint, pais).pipe( //Se realiza la peticion POST al servicio REST
      catchError(() => throwError(() => new Error('Error al crear el pais'))) //Se captura el error en caso de que exista
    );
  }

  //Se inyecta el servicio HttpClient en el constructor
  constructor(private httpClient: HttpClient) { }
}
