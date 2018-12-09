import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComicPageComponent } from './view-comic-page.component';

describe('ViewComicPageComponent', () => {
  let component: ViewComicPageComponent;
  let fixture: ComponentFixture<ViewComicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewComicPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
