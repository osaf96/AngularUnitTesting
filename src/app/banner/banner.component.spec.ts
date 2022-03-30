import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';

import { BannerComponent } from './banner.component';

// describe('BannerComponent (inline template)', () => {
//   let component: BannerComponent;
//   let fixture: ComponentFixture<BannerComponent>;
//   let h1: HTMLElement;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [BannerComponent],
//     });
//     fixture = TestBed.createComponent(BannerComponent);
//     component = fixture.componentInstance; // BannerComponent test instance
//     h1 = fixture.nativeElement.querySelector('h1');
//   });

//   it('no title in the DOM after createComponent()', () => {
//     expect(h1.textContent).toEqual('');
//   });

//   it('should display original title', () => {
//     fixture.detectChanges();
//     expect(h1.textContent).toContain(component.title);
//   });

//   it('should display original title after detectChanges()', () => {
//     fixture.detectChanges();
//     expect(h1.textContent).toContain(component.title);
//   });

//   it('should display a different test title', () => {
//     component.title = 'Test Title';
//     fixture.detectChanges();
//     expect(h1.textContent).toContain('Test Title');
//   });
// });

// describe('BannerComponent (inline template)', () => {
//   let component: BannerComponent;
//   let fixture: ComponentFixture<BannerComponent>;
//   let h1: HTMLElement;
//   let p: HTMLElement;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [BannerComponent],
//       providers: [{ provide: ComponentFixtureAutoDetect, useValue: false }],
//     });
//     fixture = TestBed.createComponent(BannerComponent);
//     component = fixture.componentInstance;
//     h1 = fixture.nativeElement.querySelector('h1');
//     p = fixture.nativeElement.querySelector('p');
//   });
//   it('should display h1 to be null', () => {
//     expect(h1.textContent).toEqual('');
//   });

//   it('should display original title', () => {
//     fixture.detectChanges();
//     expect(h1.textContent).toContain(component.title);
//   });

//   it('should display original title after expect changes', () => {
//     fixture.detectChanges();
//     expect(h1.textContent).toContain(component.title);
//   });

//   it('should display different test title', () => {
//     component.title = 'title updated';
//     fixture.detectChanges();
//     expect(h1.textContent).toContain(component.title);
//   });

//   it('should be equal to Hello', () => {
//     expect(p.textContent).toContain('Hello');
//   });
// });

describe('Banner component', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let h1: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerComponent],
    });
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.title);
  });
  it('no title in the dom after create component', () => {
    expect(h1.textContent).toEqual('');
  });
  it('should update title', () => {
    component.title = 'My Cool Title';
    fixture.detectChanges();
    expect(h1.textContent).toContain('My Cool Title');
  });
});
