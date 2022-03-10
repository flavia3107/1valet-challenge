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
  selectedItem: Device;

  private _unsubscribe = new Subject();
  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.deviceService.getData().pipe(
      takeUntil(this._unsubscribe),
      tap(devices => this.devices = devices)
    ).subscribe(e => console.log('ee', this.devices));
  }

  ngOnDestroy() {
    this._unsubscribe.next(null);
    this._unsubscribe.unsubscribe();
  }
}
