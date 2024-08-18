import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesEightyFiveComponent } from './activities-eighty-five.component';

describe('ActivitiesEightyFiveComponent', () => {
  let component: ActivitiesEightyFiveComponent;
  let fixture: ComponentFixture<ActivitiesEightyFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ActivitiesEightyFiveComponent]
    });
    fixture = TestBed.createComponent(ActivitiesEightyFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
