//Testing Vars

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivatedRouteStub } from 'src/testing';
import { HeroDetailComponent } from '../hero-detail.component';
import { HeroDetailService } from '../hero-detail.service';
import { HeroModule } from '../hero.module';

let activatedRoute: ActivatedRouteStub;
let component: HeroDetailComponent;
let fixture: ComponentFixture<HeroDetailComponent>;
// let page: Page;

fdescribe('hero detail test component', () => {
  beforeEach(() => {
    const routerSpy = createRouterSpy();
    TestBed.configureTestingModule({
      imports: [HeroModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: Router, useValue: routerSpy },
        // HeroDetailService at this level is IRRELEVANT!
        { provide: HeroDetailService, useValue: {} },
      ],
    });
    fixture = TestBed.createComponent(HeroDetailComponent);
  });

  it('should convert hero name to Title Case', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('input')!;
    const nameDispaly = hostElement.querySelector('span');

    nameInput.value = 'quick Brown fox';

    nameInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(nameDispaly?.textContent).toBe('quick Brown fox');
  });
});

function createRouterSpy() {
  return jasmine.createSpyObj('Router', ['navigate']);
}
