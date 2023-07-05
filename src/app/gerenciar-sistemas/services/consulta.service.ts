import { Injectable } from '@angular/core';

import { Sistemas } from '../model/sistemas';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  private readonly API = 'api/sistemas';

  constructor(private httpClient: HttpClient) { }
  listAll(){
    return this.httpClient.get<Sistemas[]>(this.API).
      pipe(delay(1000));
  }

  save(sistema: Sistemas){
   return this.httpClient.post<Sistemas>(this.API, sistema).subscribe(result => console.log(result));
  }
}
