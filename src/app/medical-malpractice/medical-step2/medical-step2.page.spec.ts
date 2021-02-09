import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalStep2Page } from './medical-step2.page';

describe('MedicalStep2Page', () => {
  let component: MedicalStep2Page;
  let fixture: ComponentFixture<MedicalStep2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalStep2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalStep2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
