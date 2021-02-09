import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactPage } from './impact.page';

describe('ImpactPage', () => {
  let component: ImpactPage;
  let fixture: ComponentFixture<ImpactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpactPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
