import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'student-component',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() STUDENT:string;
  constructor() { }

  ngOnInit(): void {
  }

}
