import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLiabilityPage } from './general-liability.page';

describe('GeneralLiabilityPage', () => {
  let component: GeneralLiabilityPage;
  let fixture: ComponentFixture<GeneralLiabilityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralLiabilityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLiabilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
