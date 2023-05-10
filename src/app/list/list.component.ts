import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  itemCounter: number = 0;
  projectText: string = 'Angular Project ';
  projects: any[]=[];
  constructor() {}
  ngOnInit(): void {
    this.itemCounter = this.projects.length;
  }

  addItem(): void {
    this.projects.push(this.projectText);
    this.projectText = '';
    this.itemCounter = this.projects.length;
  }

  removeItem(index: number): void {
    this.projects.splice(index, 1);
    this.itemCounter = this.projects.length;
  }
}
