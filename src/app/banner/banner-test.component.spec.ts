import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerTestComponent } from './banner-test.component';

//minimal component defined test
describe('Banner Component (minimal)', () => {
  it('should create banner component', () => {
    TestBed.configureTestingModule({ declarations: [BannerTestComponent] });
    const fixture = TestBed.createComponent(BannerTestComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});

fdescribe('Banner component test (with beforeEach)', () => {
  let component: BannerTestComponent;
  let fixture: ComponentFixture<BannerTestComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerTestComponent);
    component = fixture.componentInstance;
  });

  it('should create banner component', () => {
    expect(component).toBeDefined();
  });

  it('should validate p tag', () => {
    const content: HTMLElement = fixture.nativeElement;
    expect(content.textContent).toContain('banner works!');
  });
});
