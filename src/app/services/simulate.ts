import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../common/enviroments';

@Injectable({
  providedIn: 'root',
})
export class Simulate {
  private http = inject(HttpClient);

  getSimulate() {
    return this.http.get(`${environment.apiUrl}/simulate`);
  }
}
