import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListCheckoutComponent } from './shopping-list-checkout.component';

describe('ShoppingListCheckoutComponent', () => {
  let component: ShoppingListCheckoutComponent;
  let fixture: ComponentFixture<ShoppingListCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
