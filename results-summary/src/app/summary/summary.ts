import { Component, inject, OnInit } from '@angular/core';
import { SummaryItem } from './summary-item.model';
import { HttpClient, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-summary',
  imports: [],
  templateUrl: './summary.html',
  styleUrl: './summary.scss'
})
export class Summary implements OnInit {
  data: SummaryItem[] = [];
  httpClient = inject(HttpClient);

  async ngOnInit() {
    this.httpClient.get<SummaryItem[]>('data.json').subscribe(x => this.data = x);
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
