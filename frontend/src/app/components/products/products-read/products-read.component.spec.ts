import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsReadComponent } from './products-read.component';

describe('ProductsReadComponent', () => {
  let component: ProductsReadComponent;
  let fixture: ComponentFixture<ProductsReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
