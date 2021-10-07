import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'student-component',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  public STUDENTS = [
    { name: 'De Toffol', hobby: 'Karate', gender: 'M' },
    { name: 'Valinotto', hobby: 'Paddle', gender: 'F' },
    { name: 'Dellavalle', hobby: 'Poligono', gender: 'M' },
    { name: 'Racca', hobby: 'Paddle', gender: 'M' },
    { name: 'Luna', hobby: 'Truccarsi', gender: 'F' },
    { name: 'Kekka', hobby: 'Paddle', gender: 'F' },
    { name: 'Beppa', hobby: 'Tedeschiare', gender: 'F' },
    { name: 'Lorenzo', hobby: 'Fotografia', gender: 'M' },
    { name: 'Mommo', hobby: 'Dormire', gender: 'F' },
    { name: 'Parrick', hobby: 'Cucinare', gender: 'M' },
    { name: 'Marghe', hobby: 'Correre', gender: 'F' },
  ];
  student: {name:string,hobby:string,gender:string};
  constructor() {
    this.student = this.STUDENTS[Math.floor(Math.random() * this.STUDENTS.length)];
  }

  ngOnInit(): void {}
}
