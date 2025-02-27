import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgrevnoComponent } from './ogrevno.component';

describe('OgrevnoComponent', () => {
  let component: OgrevnoComponent;
  let fixture: ComponentFixture<OgrevnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OgrevnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OgrevnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
