import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone:false,
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
