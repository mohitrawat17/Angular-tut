import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-api-integration',
  imports: [],
  templateUrl: './api-integration.html',
  styleUrl: './api-integration.css',
})
export class ApiIntegration implements OnInit {
  http = inject(HttpClient);
  todos = signal<any>([])

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((res: any) => {
      this.todos.set(res)
    })
  }
}
