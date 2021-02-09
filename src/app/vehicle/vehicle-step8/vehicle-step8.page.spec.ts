import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleStep8Page } from './vehicle-step8.page';

describe('VehicleStep8Page', () => {
  let component: VehicleStep8Page;
  let fixture: ComponentFixture<VehicleStep8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleStep8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleStep8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
