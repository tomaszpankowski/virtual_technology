import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutS5Component } from './about-s5.component';

describe('AboutS5Component', () => {
  let component: AboutS5Component;
  let fixture: ComponentFixture<AboutS5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutS5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutS5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
