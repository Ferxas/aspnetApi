import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService, Todo } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: Todo = { title: '', isComplete: false };

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe(
      (todos) => this.todos = todos,
      (error) => console.error('Error loading todos:', error)
    );
  }

  addTodo() {
    if (this.newTodo.title.trim()) {
      this.todoService.addTodo(this.newTodo).subscribe(
        (todo) => {
          this.todos.push(todo);
          this.newTodo = { title: '', isComplete: false };
        },
        (error) => console.error('Error adding todo:', error)
      );
    }
  }

  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo).subscribe(
      () => console.log('Todo updated'),
      (error) => console.error('Error updating todo:', error)
    );
  }

  deleteTodo(id: number | undefined) {
    if (id !== undefined) {
      this.todoService.deleteTodo(id).subscribe(
        () => this.todos = this.todos.filter(t => t.id !== id),
        (error) => console.error('Error deleting todo:', error)
      );
    } else {
      console.error('Cannot delete todo with undefined id');
    }
  }
}