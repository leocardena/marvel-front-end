import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsPreviewListComponent } from './comics-preview-list.component';

describe('ComicsPreviewListComponent', () => {
  let component: ComicsPreviewListComponent;
  let fixture: ComponentFixture<ComicsPreviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsPreviewListComponent ]
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
