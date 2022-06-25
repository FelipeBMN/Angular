import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDeleteComponent } from './products-delete.component';

describe('ProductsDeleteComponent', () => {
  let component: ProductsDeleteComponent;
  let fixture: ComponentFixture<ProductsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
