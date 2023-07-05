import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarSistemasComponent } from './consultar-sistemas.component';

describe('ConsultarSistemasComponent', () => {
  let component: ConsultarSistemasComponent;
  let fixture: ComponentFixture<ConsultarSistemasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarSistemasComponent]
    });
    fixture = TestBed.createComponent(ConsultarSistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
