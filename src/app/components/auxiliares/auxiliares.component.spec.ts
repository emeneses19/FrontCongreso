import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliaresComponent } from './auxiliares.component';

describe('AuxiliaresComponent', () => {
  let component: AuxiliaresComponent;
  let fixture: ComponentFixture<AuxiliaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuxiliaresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuxiliaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
