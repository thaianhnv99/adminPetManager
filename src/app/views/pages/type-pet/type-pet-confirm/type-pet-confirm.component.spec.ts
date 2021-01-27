import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePetConfirmComponent } from './type-pet-confirm.component';

describe('TypePetConfirmComponent', () => {
  let component: TypePetConfirmComponent;
  let fixture: ComponentFixture<TypePetConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypePetConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePetConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
