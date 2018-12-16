import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ComicsPreviewListComponent } from '@marvel-app/comics/components/comics-preview-list/comics-preview-list.component';
import { MaterialModule } from '@marvel-app/material/material.module';
import { PipesModule } from '@marvel-app/shared/pipes';

describe('ComicsPreviewListComponent', () => {
  let component: ComicsPreviewListComponent;
  let fixture: ComponentFixture<ComicsPreviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComicsPreviewListComponent],
      imports: [
        RouterTestingModule,
        MaterialModule,
        PipesModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsPreviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
