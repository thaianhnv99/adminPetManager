import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePetListComponent } from './type-pet-list.component';

describe('TypePetListComponent', () => {
  let component: TypePetListComponent;
  let fixture: ComponentFixture<TypePetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypePetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
