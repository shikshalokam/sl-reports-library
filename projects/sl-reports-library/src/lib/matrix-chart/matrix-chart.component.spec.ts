import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixChartComponent } from './matrix-chart.component';

describe('MatrixChartComponent', () => {
  let component: MatrixChartComponent;
  let fixture: ComponentFixture<MatrixChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrixChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
