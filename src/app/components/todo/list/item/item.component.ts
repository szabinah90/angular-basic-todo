import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../../../../shared/interfaces/todo/todo.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-item, todo-list-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
    @Input() todoItem: ITodo;
    @Output() itemToRemove = new EventEmitter<number>();
    @Output() editedItem = new EventEmitter<ITodo>();

    editMode: boolean;
    editItemForm: FormGroup;
    editText: FormControl;
    editDeadline: FormControl;
    constructor() {}

    ngOnInit() {
        this.editMode = false;
    }

    removeItem(id: number) {
        this.itemToRemove.emit(id);
    }

    editItem(todoItem: ITodo) {
        this.editText = new FormControl(todoItem.text);
        this.editDeadline = new FormControl(todoItem.deadline);
        this.editItemForm = new FormGroup({
            text: this.editText,
            deadline: this.editDeadline,
        });
        this.editMode = true;
    }

    saveEditedItem(id: number) {
        const itemToSave = { id, ...this.editItemForm.value };
        this.editedItem.emit(itemToSave);
    }

    cancelEdit() {
      this.editItemForm.reset();
      this.editMode = false;
    }
}
