import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { Device } from 'src/assets/device-model';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnDestroy {
  devices: Device[] = [];
  allDevices: Device[] = [];
  selectedItem: Device;
  searchInput: string;
  private _unsubscribe = new Subject();
  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.deviceService.getData().pipe(
      takeUntil(this._unsubscribe),
      tap(devices => this.devices = this.allDevices = devices)
    ).subscribe();
  }

  searchDevices(input) {
    this.devices = input ? this.devices.filter(device =>
      device.device_name.toLowerCase().includes(input.toLowerCase())) : this.allDevices;
  }

  clearSearch() {
    this.searchInput = '';
    this.devices = this.allDevices;
  }

  ngOnDestroy() {
    this._unsubscribe.next(null);
    this._unsubscribe.unsubscribe();
  }
}
