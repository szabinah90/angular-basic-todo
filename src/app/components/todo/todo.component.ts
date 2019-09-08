import { Component, OnInit } from '@angular/core';
import {ITodo} from '../../shared/interfaces/todo/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  newItem: ITodo;
  constructor() { }

  ngOnInit() {
  }

  onAddNew(newItem: ITodo) {
    this.newItem = newItem;
  }
}
