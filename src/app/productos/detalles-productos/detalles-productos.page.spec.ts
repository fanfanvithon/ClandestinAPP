import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesProductosPage } from './detalles-productos.page';

describe('DetallesProductosPage', () => {
  let component: DetallesProductosPage;
  let fixture: ComponentFixture<DetallesProductosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
