import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GenericChartComponent } from './generic-chart.component';

describe('GenericChartComponent', () => {
  let component: GenericChartComponent;
  let fixture: ComponentFixture<GenericChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
