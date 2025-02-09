import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) UserId!: string;
  @Input({ required: true }) name!: string;

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

    this.tasks= this.tasks.filter((task) => task.id !== id);
  }
}
