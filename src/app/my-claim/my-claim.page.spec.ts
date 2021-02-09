import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClaimPage } from './my-claim.page';

describe('MyClaimPage', () => {
  let component: MyClaimPage;
  let fixture: ComponentFixture<MyClaimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyClaimPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClaimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
