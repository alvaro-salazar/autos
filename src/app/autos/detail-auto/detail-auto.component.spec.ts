import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAutoComponent } from './detail-auto.component';

describe('DetailAutoComponent', () => {
  let component: DetailAutoComponent;
  let fixture: ComponentFixture<DetailAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
