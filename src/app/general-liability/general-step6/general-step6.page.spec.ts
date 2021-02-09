import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralStep6Page } from './general-step6.page';

describe('GeneralStep6Page', () => {
  let component: GeneralStep6Page;
  let fixture: ComponentFixture<GeneralStep6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralStep6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralStep6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
