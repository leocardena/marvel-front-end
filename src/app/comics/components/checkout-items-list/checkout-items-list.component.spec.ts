import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutItemsListComponent } from '@marvel-app/comics/components/checkout-items-list/checkout-items-list.component';
import { MaterialModule } from '@marvel-app/material/material.module';
import { CoreModule } from '@angular/flex-layout';
import { PipesModule } from '@marvel-app/shared/pipes';
import { getComicMock } from '@marvel-app/shared/mock/comic.mock';

describe('CheckoutItemsListComponent', () => {
  let component: CheckoutItemsListComponent;
  let fixture: ComponentFixture<CheckoutItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutItemsListComponent ],
      imports: [ MaterialModule, CoreModule, PipesModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutItemsListComponent);
    component = fixture.componentInstance;
    component.comics = [getComicMock()];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
