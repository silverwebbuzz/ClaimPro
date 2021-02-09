import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentalDamagePage } from './accidental-damage.page';

describe('AccidentalDamagePage', () => {
  let component: AccidentalDamagePage;
  let fixture: ComponentFixture<AccidentalDamagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentalDamagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentalDamagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
