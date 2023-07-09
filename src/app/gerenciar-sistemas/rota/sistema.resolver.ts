import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Sistemas } from '../model/sistemas';
import { ConsultaService } from '../services/consulta.service';

@Injectable({
  providedIn: 'root'
})
export class SistemaResolver implements Resolve<Sistemas> {

  constructor(private service: ConsultaService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Sistemas> {
    if (route.params && route.params['id']) {
      return this.service.getById(route.params['id']);
    }

    return of({ id: '', nome:'', sigla: '', descricao: '', esquema: '', codSistema:'', origem:'', logo:''});
  }
}
