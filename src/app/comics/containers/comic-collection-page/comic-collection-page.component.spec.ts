import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicCollectionPageComponent } from './comic-collection-page.component';

describe('ComicCollectionPageComponent', () => {
  let component: ComicCollectionPageComponent;
  let fixture: ComponentFixture<ComicCollectionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicCollectionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicCollectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
