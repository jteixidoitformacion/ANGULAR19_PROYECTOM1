import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyswitchComponent } from './myswitch.component';

describe('MyswitchComponent', () => {
  let component: MyswitchComponent;
  let fixture: ComponentFixture<MyswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyswitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
