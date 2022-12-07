import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as data from '../config/data.json'; 


type Ttodolist = {
  id: number,
  title: string,
  complete: boolean
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnChanges{
  todoLists: Ttodolist [] = (data as any).default;
  
  taskAllComplete: boolean = false;

  constructor(){};

  ngOnChanges(): void {
    console.log('changed')
  }
  
  completeTask(id: number) {
    const task = this.todoLists.filter(todo => todo.id === id)[0];
    task.complete = !task.complete;
    let taskCompleteLists: Ttodolist [] = this.todoLists.filter(todo => todo.complete);
    if (this.todoLists.length === taskCompleteLists.length) {
      this.taskAllComplete = true;
    } else {
      this.taskAllComplete = false;
    }
  }
}
