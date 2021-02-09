import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralStep7Page } from './general-step7.page';

describe('GeneralStep7Page', () => {
  let component: GeneralStep7Page;
  let fixture: ComponentFixture<GeneralStep7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralStep7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralStep7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
