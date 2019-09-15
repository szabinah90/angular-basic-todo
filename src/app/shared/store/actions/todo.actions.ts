import {ITodo} from '../../interfaces/todo/todo.interface';

export class AddTodoEntry {
  static readonly type = '[ToDo] Add Entry';
  constructor(public newToDo: ITodo) {}
}

export class RemoveTodoEntry {
  static readonly type = '[ToDo] Remove Entry';
  constructor(public id: string) {}
}

export class EditTodoEntry {
  static readonly type = '[ToDo] Edit Entry';
  constructor(public editedItem: ITodo) {}
}
