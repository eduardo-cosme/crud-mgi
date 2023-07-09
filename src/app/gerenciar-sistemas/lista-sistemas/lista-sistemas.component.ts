import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sistemas } from '../model/sistemas';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-sistemas',
  templateUrl: './lista-sistemas.component.html',
  styleUrls: ['./lista-sistemas.component.scss']
})
export class ListaSistemasComponent {
  @Input() listaSistemas: Sistemas[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  readonly displayedColumns=['sistema', 'codSistema', 'descricao','sigla', 'esquema', 'acoes']

  constructor(){
    }

    onAdd(){
      this.add.emit(true);
    }

    onEdit(element: Sistemas){
      this.edit.emit(element);
    }
}
