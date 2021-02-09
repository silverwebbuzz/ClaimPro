import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyStep2Page } from './property-step2.page';

describe('PropertyStep2Page', () => {
  let component: PropertyStep2Page;
  let fixture: ComponentFixture<PropertyStep2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyStep2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyStep2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
