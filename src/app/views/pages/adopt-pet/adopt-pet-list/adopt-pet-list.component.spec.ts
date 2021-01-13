import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptPetListComponent } from './adopt-pet-list.component';

describe('AdoptPetListComponent', () => {
  let component: AdoptPetListComponent;
  let fixture: ComponentFixture<AdoptPetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptPetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptPetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
