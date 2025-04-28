import { Component, OnInit } from '@angular/core';
import {DailySummary, Launch, LaunchService, PaginateResponse} from '../../services/launch.service';
import {CurrencyPipe, DatePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-daily-summary',
  templateUrl: './daily-summary.component.html',
  imports: [
    NgForOf,
    DatePipe,
    CurrencyPipe,
  ],
  styleUrls: ['./daily-summary.component.css']
})
export class DailySummaryComponent implements OnInit {
  total = 0;
  page = 1;
  size = 20;
  dictionary: Record<string, string> = { credit: 'Crédito', debit: 'Débito' }
  summary: PaginateResponse<DailySummary> = { items: [], metadata: { total: 0 }};

  constructor(private service: LaunchService) {}

  ngOnInit() {
    this.load()
  }

  load() {
    this.service.dailySummary(this.page, this.size).subscribe(res => this.summary = res);
  }

  changePage(delta: number) {
    this.page += delta;
    this.load();
  }
}
