import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Summary } from "./summary/summary";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Summary]
})
export class App {
  
}
