import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalStep9Page } from './medical-step9.page';

describe('MedicalStep9Page', () => {
  let component: MedicalStep9Page;
  let fixture: ComponentFixture<MedicalStep9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalStep9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalStep9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
