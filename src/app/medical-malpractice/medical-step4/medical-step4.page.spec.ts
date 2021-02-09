import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalStep4Page } from './medical-step4.page';

describe('MedicalStep4Page', () => {
  let component: MedicalStep4Page;
  let fixture: ComponentFixture<MedicalStep4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalStep4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalStep4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
