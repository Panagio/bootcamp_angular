import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListAddItemFormComponent } from './shopping-list-add-item-form.component';

describe('ShoppingListAddItemFormComponent', () => {
  let component: ShoppingListAddItemFormComponent;
  let fixture: ComponentFixture<ShoppingListAddItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListAddItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListAddItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
