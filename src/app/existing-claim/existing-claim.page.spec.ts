import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingClaimPage } from './existing-claim.page';

describe('ExistingClaimPage', () => {
  let component: ExistingClaimPage;
  let fixture: ComponentFixture<ExistingClaimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingClaimPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingClaimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
