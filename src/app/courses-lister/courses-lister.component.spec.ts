import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListerComponent } from './courses-lister.component';

describe('CoursesListerComponent', () => {
  let component: CoursesListerComponent;
  let fixture: ComponentFixture<CoursesListerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesListerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
