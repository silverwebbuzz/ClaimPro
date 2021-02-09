import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleStep7Page } from './vehicle-step7.page';

describe('VehicleStep7Page', () => {
  let component: VehicleStep7Page;
  let fixture: ComponentFixture<VehicleStep7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleStep7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleStep7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
