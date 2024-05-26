import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarLocalPage } from './registrar-local.page';

describe('RegistrarLocalPage', () => {
  let component: RegistrarLocalPage;
  let fixture: ComponentFixture<RegistrarLocalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
