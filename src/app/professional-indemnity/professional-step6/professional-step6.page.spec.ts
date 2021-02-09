import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalStep6Page } from './professional-step6.page';

describe('ProfessionalStep6Page', () => {
  let component: ProfessionalStep6Page;
  let fixture: ComponentFixture<ProfessionalStep6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalStep6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalStep6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
