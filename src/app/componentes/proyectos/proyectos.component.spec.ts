import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosComponent } from './proyectos.component';

describe('ProyectosComponent', () => {
  let component: ProyectosComponent;
  let fixture: ComponentFixture<ProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


(function() {

  const sliders = [...document.querySelectorAll('.testimony__body')];
  const buttonNext = document.querySelector('#next');
  const buttonBefore = document.querySelector('#before');
  let value;

  buttonNext.addEventListener('click', () => {
      changePosition(1);
  });

  buttonBefore.addEventListener('click', () => {
      changePosition(-1);
  });

  const changePosition = (add) => {
      const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
      value = Number(currentTestimony);
      value += add;


      sliders[Number(currentTestimony) - 1].classList.remove('testimony__body--show');
      if (value === sliders.length + 1 || value === 0) {
          value = value === 0 ? sliders.length : 1;
      }

      sliders[value - 1].classList.add('testimony__body--show');

  }

})();