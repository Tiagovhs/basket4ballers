 import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPalyerComponent } from './details-palyer.component';

describe('DetailsPalyerComponent', () => {
  let component: DetailsPalyerComponent;
  let fixture: ComponentFixture<DetailsPalyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsPalyerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPalyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
