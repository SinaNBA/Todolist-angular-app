import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Model, TodoItem } from 'src/models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public router:Router){}
  title = 'Todolist-angular-app';
  model = new Model();
  itemCounter = this.model.items.length;

  getName() {
    return this.model.user;
  }

  getTodoList() {
    return this.model.items;
  }

  addItem(newTask: string): void {
    if (newTask != '') {
      this.model.items.push(new TodoItem(newTask, false));
      this.itemCounter = this.model.items.length;
    }
  }

  removeItem(index: number): void {
    this.model.items.splice(index, 1);
    this.itemCounter = this.model.items.length;
  }
}
