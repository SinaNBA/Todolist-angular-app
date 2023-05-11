import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Model, TodoItem } from 'src/models/model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() model!: Model;
  @Output() indexToRemove = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}

  sendEvent(i: number) {
    this.indexToRemove.emit(i);
  }
}
