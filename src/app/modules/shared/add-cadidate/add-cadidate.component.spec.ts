import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCadidateComponent } from './add-cadidate.component';

describe('AddCadidateComponent', () => {
  let component: AddCadidateComponent;
  let fixture: ComponentFixture<AddCadidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCadidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCadidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
