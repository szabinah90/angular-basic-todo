import {Component, Input, OnInit} from '@angular/core';
import {ITodo} from '../../../shared/interfaces/todo/todo.interface';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {TodoState} from '../../../shared/store/todo.state';

@Component({
  selector: 'app-list, todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Select(TodoState.getTodos)
  public todos$: Observable<ITodo[]>;
  constructor() { }

  ngOnInit() {
  }

  onEditItem(editedItem: ITodo) {
    /*const modifiedTodos = this.todos.filter(x => x.id !== editedItem.id);
    this.todos = ([...modifiedTodos, editedItem]).sort((x, y) => x.id - y.id);*/
  }
}
