import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReportsTextComponent } from './reports-text.component';

describe('ReportsTextComponent', () => {
  let component: ReportsTextComponent;
  let fixture: ComponentFixture<ReportsTextComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
