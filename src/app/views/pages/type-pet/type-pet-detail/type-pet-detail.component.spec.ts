import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePetDetailComponent } from './type-pet-detail.component';

describe('TypePetDetailComponent', () => {
  let component: TypePetDetailComponent;
  let fixture: ComponentFixture<TypePetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypePetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
