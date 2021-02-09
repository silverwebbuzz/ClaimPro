import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewOtherPage } from './review-other.page';

describe('ReviewOtherPage', () => {
  let component: ReviewOtherPage;
  let fixture: ComponentFixture<ReviewOtherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewOtherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewOtherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
