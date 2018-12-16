import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '@marvel-app/material/material.module';
import { CouponsListComponent } from '@marvel-app/comics/components/coupons-list/coupons-list.component';


describe('CouponsListComponent', () => {
  let component: CouponsListComponent;
  let fixture: ComponentFixture<CouponsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CouponsListComponent],
      imports: [MaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
