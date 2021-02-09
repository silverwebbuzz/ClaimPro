import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireExplosionPage } from './fire-explosion.page';

describe('FileExplosionPage', () => {
  let component: FireExplosionPage;
  let fixture: ComponentFixture<FireExplosionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireExplosionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireExplosionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
