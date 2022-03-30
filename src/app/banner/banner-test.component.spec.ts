import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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

describe('Banner component test (with beforeEach)', () => {
  let component: BannerTestComponent;
  let fixture: ComponentFixture<BannerTestComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerTestComponent);
    component = fixture.componentInstance;
  });

  it('should create banner component', () => {
    expect(component).toBeDefined();
  });

  it('should contain banner content', () => {
    const content: HTMLElement = fixture.nativeElement;
    expect(content.textContent).toContain('banner works!');
  });

  it('should have p tag', () => {
    const element: HTMLElement = fixture.nativeElement;
    const p = element.querySelector('p');
    expect(p?.tagName).toEqual('p'.toUpperCase());
  });

  it('should find the <p> with fixture.debugElement.nativeElement', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerEl: HTMLElement = bannerDe.nativeElement;
    const p = bannerEl.querySelector('p');
    expect(p?.textContent).toEqual('banner works!');
  });

  it('should find the <p> with fixture.debugElement.nativeElement.query(By.css)', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const paragraphDe = bannerDe.query(By.css('p'));
    const p: HTMLElement = paragraphDe.nativeElement;
    expect(p.textContent).toEqual('banner works!');
  });
});
