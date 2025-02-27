import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NapaletiComponent } from './napaleti.component';

describe('NapaletiComponent', () => {
  let component: NapaletiComponent;
  let fixture: ComponentFixture<NapaletiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NapaletiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NapaletiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
