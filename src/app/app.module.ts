import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { IconosSocialesComponent } from './componentes/iconos-sociales/iconos-sociales.component';
import { FotoComponent } from './componentes/foto/foto.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { TrabajosComponent } from './componentes/trabajos/trabajos.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { DropdownComponent } from './componentes/dropdown/dropdown.component';
import { TestimoniosComponent } from './componentes/testimonios/testimonios.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CurriculumComponent } from './componentes/curriculum/curriculum.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IconosSocialesComponent,
    FotoComponent,
    BannerComponent,
    AcercaDeComponent,
    TrabajosComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    DropdownComponent,
    TestimoniosComponent,
    FooterComponent,
    CurriculumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
