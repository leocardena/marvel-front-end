import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindComicPageComponent } from './find-comic-page.component';

xdescribe('FindComicPageComponent', () => {
  let component: FindComicPageComponent;
  let fixture: ComponentFixture<FindComicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindComicPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindComicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
