import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutItemsListComponent } from './checkout-items-list.component';

describe('CheckoutItemsListComponent', () => {
  let component: CheckoutItemsListComponent;
  let fixture: ComponentFixture<CheckoutItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
