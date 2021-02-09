import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalStep5Page } from './medical-step5.page';

describe('MedicalStep5Page', () => {
  let component: MedicalStep5Page;
  let fixture: ComponentFixture<MedicalStep5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalStep5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalStep5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
