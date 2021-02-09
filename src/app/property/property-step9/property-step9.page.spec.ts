import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyStep9Page } from './property-step9.page';

describe('PropertyStep9Page', () => {
  let component: PropertyStep9Page;
  let fixture: ComponentFixture<PropertyStep9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyStep9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyStep9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
