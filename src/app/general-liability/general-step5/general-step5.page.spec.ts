import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralStep5Page } from './general-step5.page';

describe('GeneralStep5Page', () => {
  let component: GeneralStep5Page;
  let fixture: ComponentFixture<GeneralStep5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralStep5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralStep5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
