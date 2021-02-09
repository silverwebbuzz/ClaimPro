import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewMedicalPage } from './review-medical.page';

describe('ReviewMedicalPage', () => {
  let component: ReviewMedicalPage;
  let fixture: ComponentFixture<ReviewMedicalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewMedicalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewMedicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
