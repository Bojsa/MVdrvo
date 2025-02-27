import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefuzaComponent } from './refuza.component';

describe('RefuzaComponent', () => {
  let component: RefuzaComponent;
  let fixture: ComponentFixture<RefuzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefuzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefuzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
