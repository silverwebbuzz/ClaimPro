import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleStep3Page } from './vehicle-step3.page';

describe('VehicleStep3Page', () => {
  let component: VehicleStep3Page;
  let fixture: ComponentFixture<VehicleStep3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleStep3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleStep3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
