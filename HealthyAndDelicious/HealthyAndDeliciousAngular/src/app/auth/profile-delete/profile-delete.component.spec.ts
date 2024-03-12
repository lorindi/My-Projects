import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDeleteComponent } from './profile-delete.component';

describe('ProfileDeleteComponent', () => {
  let component: ProfileDeleteComponent;
  let fixture: ComponentFixture<ProfileDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileDeleteComponent]
    });
    fixture = TestBed.createComponent(ProfileDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
