import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherRelatedPage } from './weather-related.page';

describe('WeatherRelatedPage', () => {
  let component: WeatherRelatedPage;
  let fixture: ComponentFixture<WeatherRelatedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherRelatedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherRelatedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
