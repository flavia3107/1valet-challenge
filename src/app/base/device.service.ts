import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from 'src/assets/device-model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  mockUrl = '/assets/mock-data.json'

  constructor(private http: HttpClient) { }


  getData(): Observable<Device[]> {
    return this.http.get<Device[]>(this.mockUrl);
  }
}
