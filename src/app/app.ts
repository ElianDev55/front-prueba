import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tech } from './chart/tech/tech';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tech],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('front');
}
