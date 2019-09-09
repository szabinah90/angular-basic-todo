import {Component, Input, OnInit} from '@angular/core';
import {ITodo} from '../../../shared/interfaces/todo/todo.interface';

@Component({
  selector: 'app-list, todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
// MOCK
  todos: ITodo[] = [
    {
      id: 1,
      text: 'Do shopping',
      deadline: '2019-09-03'
    },
    {
      id: 2,
      text: 'Do laundry',
      deadline: '2019-09-05'
    },
    {
      id: 3,
      text: 'Finish Void Star',
      deadline: '2019-10-04'
    },
    {
      id: 4,
      text: 'Learn RxJS',
      deadline: '2019-12-31'
    }
  ];

  private _newItem: ITodo;
  @Input() set newItem(newItem: ITodo) {
    if (newItem !== null && newItem !== undefined) {
      this._newItem = newItem;
      this._newItem.id = this.todos.length + 1;
      this.todos = [...this.todos, this._newItem];
    }
  }
  constructor() { }

  ngOnInit() {
  }

  onRemoveItem(id: number) {
    const modifiedTodos = this.todos.filter(x => x.id !== id);
    this.todos = modifiedTodos;
  }

  onEditItem(editedItem: ITodo) {
    const modifiedTodos = this.todos.filter(x => x.id !== editedItem.id);
    this.todos = ([...modifiedTodos, editedItem]).sort((x, y) => x.id - y.id);
  }
}
