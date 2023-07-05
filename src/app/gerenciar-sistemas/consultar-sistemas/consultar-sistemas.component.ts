import { Component, OnInit } from '@angular/core';
import { Sistemas } from '../model/sistemas';
import { ConsultaService } from '../services/consulta.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/componentes/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consultar-sistemas',
  templateUrl: './consultar-sistemas.component.html',
  styleUrls: ['./consultar-sistemas.component.scss']
})
export class ConsultarSistemasComponent{
  listaSistemas$:Observable<Sistemas[]>;

  displayedColumns=['sistema', 'codSistema', 'descricao','sigla', 'esquema', 'acoes']


  constructor(
    private consultaService:ConsultaService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute)
    {

    this.listaSistemas$ = consultaService.listAll()
    .pipe(
      catchError(error=>{
        //console.log(error);
        this.onError('Erro ao apresentar registro!!!')
        return of([])
      })
    );
  }

  onError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }


  ngOnInit(): void {
  }

  onAdd(){
    //console.log('onAdd');
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
