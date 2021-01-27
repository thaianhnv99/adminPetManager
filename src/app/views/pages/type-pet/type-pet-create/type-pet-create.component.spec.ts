import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePetCreateComponent } from './type-pet-create.component';

describe('TypePetCreateComponent', () => {
  let component: TypePetCreateComponent;
  let fixture: ComponentFixture<TypePetCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypePetCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
