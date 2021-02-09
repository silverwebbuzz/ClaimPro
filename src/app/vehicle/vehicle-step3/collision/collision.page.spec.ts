import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollisionPage } from './collision.page';

describe('CollisionPage', () => {
  let component: CollisionPage;
  let fixture: ComponentFixture<CollisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollisionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
