import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyStep5Page } from './property-step5.page';

describe('PropertyStep5Page', () => {
  let component: PropertyStep5Page;
  let fixture: ComponentFixture<PropertyStep5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyStep5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyStep5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
