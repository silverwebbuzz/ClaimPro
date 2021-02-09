import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirePage } from './fire.page';

describe('FirePage', () => {
  let component: FirePage;
  let fixture: ComponentFixture<FirePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
