import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewProfessionalPage } from './review-professional.page';

describe('ReviewProfessionalPage', () => {
  let component: ReviewProfessionalPage;
  let fixture: ComponentFixture<ReviewProfessionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewProfessionalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewProfessionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
