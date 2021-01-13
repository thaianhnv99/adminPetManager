import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptPetConfirmComponent } from './adopt-pet-confirm.component';

describe('AdoptPetConfirmComponent', () => {
  let component: AdoptPetConfirmComponent;
  let fixture: ComponentFixture<AdoptPetConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptPetConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptPetConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
