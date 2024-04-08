import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLugarProcedenciaComponent } from './lista-lugar-procedencia.component';

describe('ListaLugarProcedenciaComponent', () => {
  let component: ListaLugarProcedenciaComponent;
  let fixture: ComponentFixture<ListaLugarProcedenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaLugarProcedenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaLugarProcedenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
