import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) UserId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;

  constructor ( private tasksService: TasksService){
  }


  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.UserId);
  }
  onStartAddTaskHandler() {
    this.isAddingTask = true;
  }
  onCloseAddTaskHandler() {
    this.isAddingTask = false;
  }
}
