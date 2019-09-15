import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';
import {AddTodoEntry} from '../../../shared/store/actions/todo.actions';
import uuidv1 from 'uuid/v1';
import {checkDeadline} from '../../utils/validators/deadline.validator';

@Component({
  selector: 'app-new, new-todo-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {
  newTodoItem: FormGroup;
  newItemText: FormControl;
  newItemDeadline: FormControl;

  constructor(private _store: Store) { }

  ngOnInit() {
    this._initForms();
  }

  private _initForms() {
    this.newItemText = new FormControl(null,
      Validators.compose([Validators.required, Validators.maxLength(50)]));
    this.newItemDeadline = new FormControl(null,
      Validators.compose([Validators.required, checkDeadline()]));

    this.newTodoItem = new FormGroup({
      text: this.newItemText,
      deadline: this.newItemDeadline
    });
  }

  addNew() {
    console.log(this.newItemText.errors);
    if (this.newTodoItem.valid) {
      const newTodo = { id: uuidv1(), ...this.newTodoItem.value };
      this._store.dispatch(new AddTodoEntry(newTodo));
    }
    this.newTodoItem.reset();
  }
}
