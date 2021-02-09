import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralStep2Page } from './general-step2.page';

describe('GeneralStep2Page', () => {
  let component: GeneralStep2Page;
  let fixture: ComponentFixture<GeneralStep2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralStep2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralStep2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
