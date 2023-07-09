import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ConsultarSistemasComponent } from './consultar-sistemas/consultar-sistemas.component';
import { GerenciarSistemasRoutingModule } from './gerenciar-sistemas-routing.module';
import { IncluirSistemasComponent } from './incluir-sistemas/incluir-sistemas.component';
import { ListaSistemasComponent } from './lista-sistemas/lista-sistemas.component';

@NgModule({
  declarations: [
    ConsultarSistemasComponent,
    IncluirSistemasComponent,
    ListaSistemasComponent
  ],
  imports: [
    CommonModule,
    GerenciarSistemasRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class GerenciarSistemasModule { }
