import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
  welcome = 'Bienvenido a mi primera aplicacion con Angular';
  tasks = [
    'Instalar angular CLI',
    'Crear proyecto',
    'Crear Componentes',
    'Crear servicios'
  ]
}
