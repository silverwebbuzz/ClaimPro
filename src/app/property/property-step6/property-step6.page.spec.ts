import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyStep6Page } from './property-step6.page';

describe('PropertyStep6Page', () => {
  let component: PropertyStep6Page;
  let fixture: ComponentFixture<PropertyStep6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyStep6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyStep6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
