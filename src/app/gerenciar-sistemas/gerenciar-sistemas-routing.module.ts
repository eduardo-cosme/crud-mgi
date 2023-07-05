import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultarSistemasComponent } from './consultar-sistemas/consultar-sistemas.component';
import { IncluirSistemasComponent } from './incluir-sistemas/incluir-sistemas.component';

const routes: Routes = [
  {path: '', component: ConsultarSistemasComponent},
  {path: 'new', component: IncluirSistemasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciarSistemasRoutingModule { }
