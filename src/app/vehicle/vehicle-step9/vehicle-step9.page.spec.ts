import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleStep9Page } from './vehicle-step9.page';

describe('VehicleStep9Page', () => {
  let component: VehicleStep9Page;
  let fixture: ComponentFixture<VehicleStep9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleStep9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleStep9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
