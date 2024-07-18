import { Component } from '@angular/core';

interface Task {
  myTask: string;
  check: boolean;
}

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.scss']
})
export class Lesson3Component {
  public myTask: string = '';
  public editTaskValue: string = '';
  public editStatus: boolean = false;
  public tasks: Task[] = [
    { myTask: 'HTML', check: true },
    { myTask: 'SCS3', check: true },
    { myTask: 'SCSS', check: false },
    { myTask: 'JavaScript', check: false },
    { myTask: 'jQuery', check: false },
    { myTask: 'Angular', check: false }
  ]; 
  private editIndex: number | null = null; // Зберігає індекс редагованого завдання

  addTask() {
    if (this.myTask) {
      this.tasks.push({ myTask: this.myTask, check: false });
      this.myTask = '';
    }
  }

  editTask(index: number) {
    const task = this.tasks[index];
    this.editStatus = true;
    this.editIndex = index;
    if (task) {
      this.editTaskValue = task.myTask;
    }
  }

  saveTask() {
    if (this.editIndex !== null) {
      this.tasks[this.editIndex].myTask = this.editTaskValue;
      this.editTaskValue = '';
      this.editStatus = false;
      this.editIndex = null;
    }
  }

  deleteTask(index: number): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  }
}