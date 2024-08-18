import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesBronzeComponent } from './activities-bronze.component';

describe('ActivitiesBronzeComponent', () => {
  let component: ActivitiesBronzeComponent;
  let fixture: ComponentFixture<ActivitiesBronzeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ActivitiesBronzeComponent]
    });
    fixture = TestBed.createComponent(ActivitiesBronzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
