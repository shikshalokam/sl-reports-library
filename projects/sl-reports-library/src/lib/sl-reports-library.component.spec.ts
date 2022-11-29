import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SlReportsLibraryComponent } from './sl-reports-library.component';

describe('SlReportsLibraryComponent', () => {
  let component: SlReportsLibraryComponent;
  let fixture: ComponentFixture<SlReportsLibraryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SlReportsLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlReportsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
