import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyStep8Page } from './property-step8.page';

describe('PropertyStep8Page', () => {
  let component: PropertyStep8Page;
  let fixture: ComponentFixture<PropertyStep8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyStep8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyStep8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
