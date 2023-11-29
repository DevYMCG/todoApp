import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Bienvenido a mi primera aplicacion con Angular';
  tasks = signal([
    'Instalar angular CLI',
    'Crear proyecto',
    'Crear Componentes',
    'Crear servicios',
  ]);
  name = signal('Yohana');
  age = 29;
  disabled = false;
  img = 'https://w3schools.com/howto/img_avatar.png';

  person = {
    name: 'Nicolas',
    age: 18
  }

  clickHandler() {
    alert('Hola');
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newvalue = input.value;
    this.name.set(newvalue);
  }

  keydownHandler(event: KeyboardEvent) {  
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
