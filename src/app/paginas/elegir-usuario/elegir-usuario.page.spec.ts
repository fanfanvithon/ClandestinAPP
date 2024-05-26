import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElegirUsuarioPage } from './elegir-usuario.page';

describe('ElegirUsuarioPage', () => {
  let component: ElegirUsuarioPage;
  let fixture: ComponentFixture<ElegirUsuarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegirUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
