import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhetherPage } from './whether.page';

describe('WhetherPage', () => {
  let component: WhetherPage;
  let fixture: ComponentFixture<WhetherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhetherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhetherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
