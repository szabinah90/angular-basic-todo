import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../../../../shared/interfaces/todo/todo.interface';

@Component({
    selector: 'app-item, todo-list-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
    @Input() todoItem: ITodo;
    @Output() itemToRemove = new EventEmitter<number>();
    constructor() {}

    ngOnInit() {}

    removeItem(id: number) {
        this.itemToRemove.emit(id);
    }

    // TODO: implement "edit item"
}
