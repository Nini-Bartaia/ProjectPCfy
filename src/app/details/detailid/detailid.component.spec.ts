import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailidComponent } from './detailid.component';

describe('DetailidComponent', () => {
  let component: DetailidComponent;
  let fixture: ComponentFixture<DetailidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
