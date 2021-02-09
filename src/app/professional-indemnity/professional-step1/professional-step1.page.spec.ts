import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalStep1Page } from './professional-step1.page';

describe('ProfessionalStep1Page', () => {
  let component: ProfessionalStep1Page;
  let fixture: ComponentFixture<ProfessionalStep1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalStep1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalStep1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
