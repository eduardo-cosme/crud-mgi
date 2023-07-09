import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultarSistemasComponent } from './consultar-sistemas/consultar-sistemas.component';
import { IncluirSistemasComponent } from './incluir-sistemas/incluir-sistemas.component';
import { SistemaResolver } from './rota/sistema.resolver';

const routes: Routes = [
  {path: '', component: ConsultarSistemasComponent},
  {path: 'new', component: IncluirSistemasComponent, resolve: {sistema: SistemaResolver}},
  {path: 'edit/:id', component: IncluirSistemasComponent, resolve: {sistema: SistemaResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciarSistemasRoutingModule { }
