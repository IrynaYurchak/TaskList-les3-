import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Task {
  myTask: string;
  check: boolean;
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() tasks: Task[] = [];
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onEdit(index: number): void {
    this.edit.emit(index);
  }

  onDelete(index: number): void {
    this.delete.emit(index);
  }
}

