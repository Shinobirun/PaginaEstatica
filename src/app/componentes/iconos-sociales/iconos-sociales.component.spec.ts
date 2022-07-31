import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconosSocialesComponent } from './iconos-sociales.component';

describe('IconosSocialesComponent', () => {
  let component: IconosSocialesComponent;
  let fixture: ComponentFixture<IconosSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconosSocialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconosSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
