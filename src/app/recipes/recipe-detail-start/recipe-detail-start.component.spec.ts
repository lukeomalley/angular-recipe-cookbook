import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailStartComponent } from './recipe-detail-start.component';

describe('RecipeDetailStartComponent', () => {
  let component: RecipeDetailStartComponent;
  let fixture: ComponentFixture<RecipeDetailStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetailStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
