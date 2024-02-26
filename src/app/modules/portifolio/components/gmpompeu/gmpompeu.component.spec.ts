import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpompeuComponent } from './gmpompeu.component';

describe('GmpompeuComponent', () => {
  let component: GmpompeuComponent;
  let fixture: ComponentFixture<GmpompeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GmpompeuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GmpompeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
