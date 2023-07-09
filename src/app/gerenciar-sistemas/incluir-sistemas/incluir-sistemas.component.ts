import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { ConsultaService } from '../services/consulta.service';
import { Sistemas } from '../model/sistemas';

@Component({
  selector: 'app-incluir-sistemas',
  templateUrl: './incluir-sistemas.component.html',
  styleUrls: ['./incluir-sistemas.component.scss']
})
export class IncluirSistemasComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: ConsultaService,
    private location: Location,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
    ){
    this.form=this.formBuilder.group({
      id:[null],
      nome:[null],
      sigla:[null],
      descricao:[null],
      esquema:[null],
      codSistema:[null],
      origem:[null],
      logo:[null]
    });
    const sistema: Sistemas = this.route.snapshot.data['sistema'];
    this.form.setValue({id:sistema.id, nome:sistema.nome, sigla:sistema.sigla, descricao:sistema.descricao,
      esquema:sistema.esquema, codSistema:sistema.codSistema, origem:sistema.origem, logo:sistema.logo})
    console.log(sistema);
  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(result => this.onSuccess());
    this.onCancel();
  }
  onCancel(){
    this.location.back();
  }

  onSuccess(){
    this.snackBar.open('Salvo com sucesso!!', '', {duration:3000});
  }

  onLimpar(){
    this.form=this.formBuilder.group({
      nome:[null],
      sigla:[null],
      descricao:[null],
      esquema:[null],
      codSistema:[null],
      origem:[null],
      logo:[null]
    });
  }
}
