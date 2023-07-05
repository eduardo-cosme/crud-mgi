import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ConsultaService } from '../services/consulta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-incluir-sistemas',
  templateUrl: './incluir-sistemas.component.html',
  styleUrls: ['./incluir-sistemas.component.scss']
})
export class IncluirSistemasComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: ConsultaService,
    private location: Location){
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

  onSubmit(){
    this.service.save(this.form.value);
    this.onCancel();
  }
  onCancel(){
    this.location.back();
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
