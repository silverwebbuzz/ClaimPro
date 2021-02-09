import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewGeneralPage } from './review-general.page';

describe('ReviewGeneralPage', () => {
  let component: ReviewGeneralPage;
  let fixture: ComponentFixture<ReviewGeneralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewGeneralPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
