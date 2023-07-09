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
      pipe(first(),
      tap(sis => console.log(sis)),
        delay(1000));
  }

  save(sistema: Sistemas){
    if(sistema.id){
      return this.update(sistema);
    }
   return this.create(sistema);
  }

  create(sistema: Sistemas){
    return this.httpClient.post<Sistemas>(this.API, sistema);
   }

  getById(id:number){
    return this.httpClient.get<Sistemas>(`${this.API}/${id}`);
  }

  update(sistema: Sistemas){
    return this.httpClient.put<Sistemas>(`${this.API}/${sistema.id}`, sistema);
  }
}
