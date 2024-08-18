import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesSixtyFiveComponent } from './activities-sixty-five.component';

describe('ActivitiesSixtyFiveComponent', () => {
  let component: ActivitiesSixtyFiveComponent;
  let fixture: ComponentFixture<ActivitiesSixtyFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ActivitiesSixtyFiveComponent]
    });
    fixture = TestBed.createComponent(ActivitiesSixtyFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
