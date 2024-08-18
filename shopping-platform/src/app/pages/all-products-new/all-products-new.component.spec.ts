import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsNewComponent } from './all-products-new.component';

describe('AllProductsNewComponent', () => {
  let component: AllProductsNewComponent;
  let fixture: ComponentFixture<AllProductsNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AllProductsNewComponent]
    });
    fixture = TestBed.createComponent(AllProductsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
