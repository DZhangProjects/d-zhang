import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusingsComponent } from './musings.component';

describe('MusingsComponent', () => {
  let component: MusingsComponent;
  let fixture: ComponentFixture<MusingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
