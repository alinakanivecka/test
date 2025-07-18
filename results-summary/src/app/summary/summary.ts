import { Component, OnInit } from '@angular/core';
import { SummaryItem } from './summary-item.model';

@Component({
  selector: 'app-summary',
  imports: [],
  templateUrl: './summary.html',
  styleUrl: './summary.scss'
})
export class Summary implements OnInit {
  data: SummaryItem[] = [];

  async ngOnInit() {
    this.data = await (await fetch('/data.json')).json();
  }

  calcAvgScore() {
    if (this.data.length === 0) {
      return 0;
    }
    let sum = 0;
    this.data.forEach((element) => {
     sum = sum + element.score;
    })
    return Math.round(sum / this.data.length);
  }
}
