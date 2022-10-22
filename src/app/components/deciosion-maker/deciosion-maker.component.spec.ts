import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeciosionMakerComponent } from './deciosion-maker.component';

describe('DeciosionMakerComponent', () => {
  let component: DeciosionMakerComponent;
  let fixture: ComponentFixture<DeciosionMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeciosionMakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeciosionMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
