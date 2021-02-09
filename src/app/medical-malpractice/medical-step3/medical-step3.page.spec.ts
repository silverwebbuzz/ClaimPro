import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalStep3Page } from './medical-step3.page';

describe('MedicalStep3Page', () => {
  let component: MedicalStep3Page;
  let fixture: ComponentFixture<MedicalStep3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalStep3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalStep3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
