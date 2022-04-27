import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageS4Component } from './package-s4.component';

describe('PackageS4Component', () => {
  let component: PackageS4Component;
  let fixture: ComponentFixture<PackageS4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageS4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
