import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiljevinaComponent } from './piljevina.component';

describe('PiljevinaComponent', () => {
  let component: PiljevinaComponent;
  let fixture: ComponentFixture<PiljevinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiljevinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PiljevinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
