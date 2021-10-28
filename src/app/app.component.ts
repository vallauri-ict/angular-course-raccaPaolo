import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('nominativo') nominativo!: ElementRef;
  title = "Paolo Racca's project";
  studentName: string = '';
  gender: string = 'F';
  hobby: string = '';

  public STUDENTS: any = [
    { name: 'De Toffol', hobby: 'Karate', gender: 'M', isPro: true },
    { name: 'Valinotto', hobby: 'Paddle', gender: 'F', isPro: false },
    { name: 'Dellavalle', hobby: 'Poligono', gender: 'M', isPro: true },
    { name: 'Racca', hobby: 'Paddle', gender: 'M', isPro: true },
    { name: 'Luna', hobby: 'Truccarsi', gender: 'F', isPro: false },
    { name: 'Kekka', hobby: 'Paddle', gender: 'F', isPro: true },
    { name: 'Beppa', hobby: 'Tedeschiare', gender: 'F', isPro: true },
    { name: 'Lorenzo', hobby: 'Fotografia', gender: 'M', isPro: false },
    { name: 'Mommo', hobby: 'Dormire', gender: 'F', isPro: true },
    { name: 'Parrick', hobby: 'Cucinare', gender: 'M', isPro: true },
    { name: 'Marghe', hobby: 'Correre', gender: 'F', isPro: false },
  ];

  public addStudent = () => {
    this.STUDENTS.push({
      name: this.studentName,
      hobby: this.hobby,
      gender: this.gender,
    });
    this.gender = '';
    this.studentName = '';
    this.hobby = '';
    this.nominativo.nativeElement.focus();
  };

  public eliminaStudente = (student) => {
    this.STUDENTS.splice(
      this.STUDENTS.findIndex((f) => f.name === student.name),
      1
    );
  };
}
