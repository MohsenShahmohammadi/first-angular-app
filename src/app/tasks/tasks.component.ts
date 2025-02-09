import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';

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

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summery: 'Learn All the basic and advanced features on angular & how to apply them.',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summery: 'Build a first prototype of the online shop website.',
      dueDate: '2024-05-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summery: 'prepare and describe an issue template which will help with project management',
      dueDate: '2025-06-15'
    }
  ]
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.UserId);
  }

  onCompleteTask(id: string) {

    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  onStartAddTaskHandler() {
    this.isAddingTask = true;
  }
  onCancelAddTaskHandler() {
    this.isAddingTask = false;
  }
  onAddTaskHandler(taskData: NewTaskData) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.UserId,
      title: taskData.title,
      summery: taskData.summery,
      dueDate: taskData.date
    })
    this.isAddingTask = false;
  }
}
