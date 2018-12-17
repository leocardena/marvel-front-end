import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPageComponent } from './checkout-page.component';

xdescribe('CheckoutPageComponent', () => {
  let component: CheckoutPageComponent;
  let fixture: ComponentFixture<CheckoutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
