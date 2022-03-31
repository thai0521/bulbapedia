import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBulbComponent } from './add-bulb.component';

describe('AddBulbComponent', () => {
  let component: AddBulbComponent;
  let fixture: ComponentFixture<AddBulbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBulbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBulbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
