import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlReportsLibraryComponent } from './sl-reports-library.component';

describe('SlReportsLibraryComponent', () => {
  let component: SlReportsLibraryComponent;
  let fixture: ComponentFixture<SlReportsLibraryComponent>;

  beforeEach(async(() => {
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
