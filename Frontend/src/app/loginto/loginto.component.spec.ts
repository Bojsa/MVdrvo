import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogintoComponent } from './loginto.component';

describe('LogintoComponent', () => {
  let component: LogintoComponent;
  let fixture: ComponentFixture<LogintoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogintoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogintoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
