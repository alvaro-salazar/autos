import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Programa} from "../model/programa";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProgramasService {
  private baseUrl: string = "https://raw.githubusercontent.com/FabianAndres2023/Programa/master/programas.json.txt";

    constructor(private httpClient: HttpClient) { }

    //Observable es parte de la interfaz reactiva de javascript (rxjs)
    getProgramas(): Observable<Programa[]>{
        return this.httpClient.get<Programa[]>(this.baseUrl);
    }
}
