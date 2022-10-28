import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcadidateComponent } from './viewcadidate.component';

describe('ViewcadidateComponent', () => {
  let component: ViewcadidateComponent;
  let fixture: ComponentFixture<ViewcadidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcadidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcadidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
