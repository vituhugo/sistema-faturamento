import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

export interface Launch {
  id?: number;
  amount: number;
  description: string;
  type: 'credit' | 'debit';
  date: string;
}

export interface DailySummary {
  id?: number;
  totalAmount: number;
  numberOfRecords: number;
  periodStart: Date;
  periodEnd: Date;
  startsAtId: number;
  endsAtId: number;
}

export interface PaginateResponse<T> {
  items: T[];
  metadata: {
    total: number;
  }
}

@Injectable({ providedIn: 'root' })
export class LaunchService {
  private entryBaseUrl = environment.entryApiUrl;
  private consolidationBaseUrl = environment.consolidationApiUrl;

  constructor(private http: HttpClient) {}

  create(launch: Launch): Observable<Launch> {
    return this.http.post<Launch>(this.entryBaseUrl, launch);
  }

  list(page: number, perPage: number, date?: Date): Observable<PaginateResponse<Launch>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('perPage', perPage.toString())
      .set('date', (date ?? new Date()).toISOString())
    return this.http.get<PaginateResponse<Launch>>(this.entryBaseUrl, { params });
  }

  dailySummary(page: number, perPage: number): Observable<PaginateResponse<DailySummary>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('perPage', perPage.toString())
    return this.http.get<PaginateResponse<DailySummary>>(this.consolidationBaseUrl);
  }
}
