import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>Angular Todos with Fetch & SSR & Workers</div>
    <ul>
      <li *ngFor="let todo of todos$ | async">
        {{ todo.title }}
      </li>
    </ul>
  `,
})
export class AppComponent {
  http = inject(HttpClient);

  todos$ = this.getTodos();

  getTodos() {
    return this.http.get<{ id: string; title: string }[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}
