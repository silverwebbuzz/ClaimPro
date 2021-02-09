import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactByCollisionPage } from './impact-by-collision.page';

describe('ImpactByCollisionPage', () => {
  let component: ImpactByCollisionPage;
  let fixture: ComponentFixture<ImpactByCollisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpactByCollisionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactByCollisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
