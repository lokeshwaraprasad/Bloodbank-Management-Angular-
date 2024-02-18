import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVolunteersComponent } from './add-volunteers.component';

describe('AddVolunteersComponent', () => {
  let component: AddVolunteersComponent;
  let fixture: ComponentFixture<AddVolunteersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddVolunteersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddVolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
