import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCongresoComponent } from './lista-congreso.component';

describe('ListaCongresoComponent', () => {
  let component: ListaCongresoComponent;
  let fixture: ComponentFixture<ListaCongresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaCongresoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaCongresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
