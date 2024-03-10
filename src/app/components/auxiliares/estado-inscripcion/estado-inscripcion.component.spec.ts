import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoInscripcionComponent } from './estado-inscripcion.component';

describe('EstadoInscripcionComponent', () => {
  let component: EstadoInscripcionComponent;
  let fixture: ComponentFixture<EstadoInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstadoInscripcionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadoInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
