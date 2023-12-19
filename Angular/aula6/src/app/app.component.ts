import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { FormularioComponent } from "./componentes/formulario/formulario.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, PrincipalComponent, FormularioComponent]
})
export class AppComponent {
  title = 'aula6';
}
