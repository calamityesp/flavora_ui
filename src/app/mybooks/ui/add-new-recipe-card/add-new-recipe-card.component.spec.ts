import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRecipeCardComponent } from './add-new-recipe-card.component';

describe('AddNewRecipeCardComponent', () => {
  let component: AddNewRecipeCardComponent;
  let fixture: ComponentFixture<AddNewRecipeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewRecipeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewRecipeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
