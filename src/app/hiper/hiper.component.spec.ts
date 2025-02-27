import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiperComponent } from './hiper.component';

describe('HiperComponent', () => {
  let component: HiperComponent;
  let fixture: ComponentFixture<HiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
