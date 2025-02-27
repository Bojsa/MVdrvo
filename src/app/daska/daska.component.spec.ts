import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaskaComponent } from './daska.component';

describe('DaskaComponent', () => {
  let component: DaskaComponent;
  let fixture: ComponentFixture<DaskaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaskaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DaskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
