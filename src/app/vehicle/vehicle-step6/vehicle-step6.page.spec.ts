import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleStep6Page } from './vehicle-step6.page';

describe('VehicleStep6Page', () => {
  let component: VehicleStep6Page;
  let fixture: ComponentFixture<VehicleStep6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleStep6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleStep6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
