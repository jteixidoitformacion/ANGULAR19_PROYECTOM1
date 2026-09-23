import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydeferComponent } from './mydefer.component';

describe('MydeferComponent', () => {
  let component: MydeferComponent;
  let fixture: ComponentFixture<MydeferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MydeferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MydeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
