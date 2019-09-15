import {Action, Selector, State, StateContext} from '@ngxs/store';
import {ITodo} from '../interfaces/todo/todo.interface';
import {AddTodoEntry, EditTodoEntry, RemoveTodoEntry} from './actions/todo.actions';

@State<ITodo[]>({
  name: 'todoList',
  defaults: []
})
export class TodoState {

  @Selector()
  static getTodos(state: ITodo[]) {
    return state;
  }

  @Selector()
  static getTodosLength(state: ITodo[]) {
    return state.length;
  }

  @Selector()
  static getTodoById(state: ITodo[], id: string) {
    return state.find(todo => todo.id === id);
  }

  @Action(AddTodoEntry)
  public addTodo({setState, getState}: StateContext<ITodo[]>, { newToDo }: AddTodoEntry) {
    setState([...getState(), newToDo]);
  }

  @Action(RemoveTodoEntry)
  public removeTodo({getState, setState}: StateContext<ITodo[]>, { id }: RemoveTodoEntry) {
    const filteredTodos = getState().filter(todo => todo.id !== id);
    setState(filteredTodos);
  }

  @Action(EditTodoEntry)
  public editTodo({getState, setState}: StateContext<ITodo[]>, { editedItem }: EditTodoEntry) {
    const editedTodos = getState().map(todo => todo.id === editedItem.id ? editedItem : todo);
    setState(editedTodos);
  }
}
