import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalStep2Page } from './professional-step2.page';

describe('ProfessionalStep2Page', () => {
  let component: ProfessionalStep2Page;
  let fixture: ComponentFixture<ProfessionalStep2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalStep2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalStep2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
