import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalMalpracticePage } from './medical-malpractice.page';

describe('MedicalMalpracticePage', () => {
  let component: MedicalMalpracticePage;
  let fixture: ComponentFixture<MedicalMalpracticePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalMalpracticePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalMalpracticePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
