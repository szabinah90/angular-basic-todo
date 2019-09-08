import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ITodo} from '../../../shared/interfaces/todo/todo.interface';

@Component({
  selector: 'app-new, new-todo-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {
  newTodoItem: FormGroup;
  newItemText: FormControl;
  newItemDeadline: FormControl;

  @Output() itemToAdd = new EventEmitter<ITodo>();
  constructor() { }

  ngOnInit() {
    this._initForms();
  }

  private _initForms() {
    this.newItemText = new FormControl(null, Validators.required);
    this.newItemDeadline = new FormControl(null);

    this.newTodoItem = new FormGroup({
      text: this.newItemText,
      deadline: this.newItemDeadline
    });
  }

  addNew() {
    if (this.newTodoItem.valid) {
      this.itemToAdd.emit(this.newTodoItem.value);
    }
  }
}
