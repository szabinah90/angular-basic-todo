import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { ListComponent } from './list/list.component';
import { NewItemComponent } from './new-item/new-item.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { ItemComponent } from './list/item/item.component';


@NgModule({
  declarations: [TodoComponent, ListComponent, NewItemComponent, ItemComponent],
  exports: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class TodoModule { }
