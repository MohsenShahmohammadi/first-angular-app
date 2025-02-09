export interface Task {
  id: string;
  userId: string;
  title: string;
  summery: string;
  dueDate: string;
}

export interface NewTaskData { title: string; summery: string; date: string }
