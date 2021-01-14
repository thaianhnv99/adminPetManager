import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptPetDetailComponent } from './adopt-pet-detail.component';

describe('AdoptPetDetailComponent', () => {
  let component: AdoptPetDetailComponent;
  let fixture: ComponentFixture<AdoptPetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptPetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptPetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
