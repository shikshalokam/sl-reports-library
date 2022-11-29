import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PercentageColumnChartsComponent } from './percentage-column-charts.component';

describe('PercentageColumnChartsComponent', () => {
  let component: PercentageColumnChartsComponent;
  let fixture: ComponentFixture<PercentageColumnChartsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentageColumnChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageColumnChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
