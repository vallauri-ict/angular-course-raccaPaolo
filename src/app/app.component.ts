import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = "Paolo Racca's project";

  public STUDENTS = [
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
}
