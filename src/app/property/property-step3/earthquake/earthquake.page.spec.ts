import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthquakePage } from './earthquake.page';

describe('EarthquakePage', () => {
  let component: EarthquakePage;
  let fixture: ComponentFixture<EarthquakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthquakePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthquakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
