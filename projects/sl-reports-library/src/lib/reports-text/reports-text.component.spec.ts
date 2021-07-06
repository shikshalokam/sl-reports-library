import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsTextComponent } from './reports-text.component';

describe('ReportsTextComponent', () => {
  let component: ReportsTextComponent;
  let fixture: ComponentFixture<ReportsTextComponent>;

  beforeEach(async(() => {
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
