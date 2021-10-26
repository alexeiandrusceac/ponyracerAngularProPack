import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonyracerviewComponent } from './ponyracerview.component';

describe('PonyracerviewComponent', () => {
  let component: PonyracerviewComponent;
  let fixture: ComponentFixture<PonyracerviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PonyracerviewComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PonyracerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
