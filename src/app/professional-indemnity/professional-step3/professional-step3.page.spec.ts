import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalStep3Page } from './professional-step3.page';

describe('ProfessionalStep3Page', () => {
  let component: ProfessionalStep3Page;
  let fixture: ComponentFixture<ProfessionalStep3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalStep3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalStep3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
