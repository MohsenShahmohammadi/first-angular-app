import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TasksComponent } from "./tasks.component";
import { SharedModule } from "../shared/shared.module";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations:[TasksComponent,NewTaskComponent,TaskComponent],
  exports:[TasksComponent],
  imports:[CommonModule,FormsModule,SharedModule]
})
export class TasksModule{}
