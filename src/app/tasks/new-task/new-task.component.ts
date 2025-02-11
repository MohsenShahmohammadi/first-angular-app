import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone:false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {
  @Input({ required: true }) UserId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle: string = '';
  enteredSummery: string = '';
  enteredDate: string = '';

  constructor(private tasksService: TasksService){}

  onCanceled() {
    this.close.emit();
  }
  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summery: this.enteredSummery,
      date: this.enteredDate,
    },this.UserId);
    this.close.emit();
  }
}
