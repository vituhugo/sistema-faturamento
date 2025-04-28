import { Component, OnInit } from '@angular/core';
import { LaunchService, Launch } from '../../services/launch.service';
import {CurrencyPipe, NgForOf, DatePipe } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  imports: [
    NgForOf,
    FormsModule,
    CurrencyPipe,
    DatePipe,
  ],
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {
  items: Launch[] = [];
  total = 0;
  page = 1;
  size = 20;
  filter = { date: new Date() };
  dictionary: Record<string, string> = { credit: 'Crédito', debit: 'Débito' }

  constructor(private service: LaunchService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.list(this.page, this.size).subscribe(resp => {
      this.items = resp.items;
      this.total = resp.metadata.total;
    });
  }

  changePage(delta: number) {
    this.page += delta;
    this.load();
  }

  applyFilter() {
    console.log('applyFilter', this.filter.date);
    this.service.list(1, this.size, new Date(this.filter.date)).subscribe(resp => {
      this.items = resp.items;
      this.total = resp.metadata.total;
    });
  }
}
