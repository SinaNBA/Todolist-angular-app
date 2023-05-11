import { Component, OnInit } from '@angular/core';
import { Model, TodoItem } from 'src/models/model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  itemCounter: number = 0;
  projects = new Model();
  constructor() {}
  ngOnInit(): void {
    this.itemCounter = this.projects.items.length;
  }

  getTodoList() {
    return this.projects.items;
  }

  addItem(newTask: string): void {
    if (newTask != '') {
      this.projects.items.push(new TodoItem(newTask,false));
      this.itemCounter = this.projects.items.length;
    }
  }

  removeItem(index: number): void {
    this.projects.items.splice(index, 1);
    this.itemCounter = this.projects.items.length;
  }
}
