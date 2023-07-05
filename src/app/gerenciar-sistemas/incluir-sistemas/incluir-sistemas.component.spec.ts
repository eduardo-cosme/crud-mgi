import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirSistemasComponent } from './incluir-sistemas.component';

describe('IncluirSistemasComponent', () => {
  let component: IncluirSistemasComponent;
  let fixture: ComponentFixture<IncluirSistemasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncluirSistemasComponent]
    });
    fixture = TestBed.createComponent(IncluirSistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
