import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ComicDetailComponent } from '@marvel-app/comics/components/comic-detail/comic-detail.component';
import { MaterialModule } from '@marvel-app/material/material.module';
import { PipesModule } from '@marvel-app/shared/pipes';
import { getComicMock } from '@marvel-app/shared/mock/comic.mock';

describe('ComicDetailComponent', () => {
  let component: ComicDetailComponent;
  let fixture: ComponentFixture<ComicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComicDetailComponent],
      imports: [
        RouterTestingModule,
        MaterialModule,
        PipesModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicDetailComponent);
    component = fixture.componentInstance;
    component.comic = getComicMock();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
