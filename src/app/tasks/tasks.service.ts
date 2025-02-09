import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
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

  getUserTasks(userId: string) {
console.log(userId);
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData,userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summery: taskData.summery,
      dueDate: taskData.date
    })
  }
  removeTask(id : string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
