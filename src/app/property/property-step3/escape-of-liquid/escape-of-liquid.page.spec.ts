import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapeOfLiquidPage } from './escape-of-liquid.page';

describe('EscapeOfLiquidPage', () => {
  let component: EscapeOfLiquidPage;
  let fixture: ComponentFixture<EscapeOfLiquidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscapeOfLiquidPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscapeOfLiquidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
