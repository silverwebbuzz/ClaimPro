import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheftPage } from './theft.page';

describe('TheftPage', () => {
  let component: TheftPage;
  let fixture: ComponentFixture<TheftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheftPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
