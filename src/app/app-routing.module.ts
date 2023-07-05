import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',pathMatch: 'full', redirectTo: 'gerenciar'},
  {
    path: 'gerenciar',
    loadChildren: () => import('./gerenciar-sistemas/gerenciar-sistemas.module').then(m => m.GerenciarSistemasModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
