import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralStep4Page } from './general-step4.page';

describe('GeneralStep4Page', () => {
  let component: GeneralStep4Page;
  let fixture: ComponentFixture<GeneralStep4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralStep4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralStep4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
