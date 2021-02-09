import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeMaliciousDamagePage } from './crime-malicious-damage.page';

describe('CrimeMaliciousDamagePage', () => {
  let component: CrimeMaliciousDamagePage;
  let fixture: ComponentFixture<CrimeMaliciousDamagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimeMaliciousDamagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeMaliciousDamagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
