import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactByTreePage } from './impact-by-tree.page';

describe('ImpactByTreePage', () => {
  let component: ImpactByTreePage;
  let fixture: ComponentFixture<ImpactByTreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpactByTreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactByTreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
