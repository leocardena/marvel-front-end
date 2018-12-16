import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponsPageComponent } from './coupons-page.component';

describe('CouponsPageComponent', () => {
  let component: CouponsPageComponent;
  let fixture: ComponentFixture<CouponsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
