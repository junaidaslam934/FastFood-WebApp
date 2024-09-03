import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteraUserComponent } from './registera-user.component';

describe('RegisteraUserComponent', () => {
  let component: RegisteraUserComponent;
  let fixture: ComponentFixture<RegisteraUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisteraUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisteraUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
