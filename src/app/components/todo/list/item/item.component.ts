import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../../../../shared/interfaces/todo/todo.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';
import {EditTodoEntry, RemoveTodoEntry} from '../../../../shared/store/actions/todo.actions';
import {checkDeadline} from '../../../utils/validators/deadline.validator';

@Component({
    selector: 'app-item, todo-list-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
    @Input() todoItem: ITodo;
    @Input() index: number;
    @Output() editedItem = new EventEmitter<ITodo>();

    editMode: boolean;
    editItemForm: FormGroup;
    editText: FormControl;
    editDeadline: FormControl;
    constructor(private _store: Store) {}

    ngOnInit() {
        this.editMode = false;
    }

    removeItem(id: string) {
        this._store.dispatch(new RemoveTodoEntry(id));
    }

    editItem(todoItem: ITodo) {
        this.editText = new FormControl(todoItem.text,
          Validators.compose([Validators.required, Validators.maxLength(50)]));
        this.editDeadline = new FormControl(todoItem.deadline,
          Validators.compose([Validators.required, checkDeadline()]));
        this.editItemForm = new FormGroup({
            id: new FormControl(this.todoItem.id),
            text: this.editText,
            deadline: this.editDeadline,
        });
        this.editMode = true;
    }

    saveEditedItem() {
      if (this.editItemForm.valid) {
        const editedItem = this.editItemForm.value;
        this._store.dispatch(new EditTodoEntry(editedItem));
        this.editMode = false;
      }
    }

    cancelEdit() {
      this.editItemForm.reset();
      this.editMode = false;
    }
}
