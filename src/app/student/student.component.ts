import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'student-component',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  @Input() STUDENT: {
    name: string;
    hobby: string;
    gender: string;
    isPro: boolean;
  };
  constructor() {}

  @Output() delete: EventEmitter<object> = new EventEmitter<object>();

  ngOnInit(): void {
    this.getRandomPro();
  }

  public getRandomPro = () => {
    console.log(Math.floor(Math.random() * 2));
    if (Math.floor(Math.random() * 2) == 1) this.STUDENT.isPro = true;
    else this.STUDENT.isPro = false;
  };

  public elimina = () => {
    this.delete.emit(this.STUDENT);
  };
}
