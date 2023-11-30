import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear components',
      completed: true
    },
  ]);

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    this.addTask(input.value);
  }

  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    /* Modifica o agrega un nuevo valor */
    this.tasks.update((tasks) => [...tasks, newTask])
  }

  deleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
  }

  statusTask(index: number) {
    this.tasks.update((currentTasks) => {
      // Verifica si el índice está dentro de los límites del array
      if (index >= 0 && index < currentTasks.length) {
        // Cambia el estado 'completed' del elemento en la posición index
        const updatedTasks = currentTasks.map((task, i) =>
          i === index ? { ...task, completed: !task.completed } : task
        );
        
        // Devuelve el nuevo estado de las tareas
        return updatedTasks;
      }
  
      // Devuelve el estado actual si el índice está fuera de los límites
      return currentTasks;
    });
  }
}
