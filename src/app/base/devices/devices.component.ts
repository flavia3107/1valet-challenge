import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Device } from 'src/assets/device-model';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  @Input() devicesList: Device[];
  @Output() deviceSelected: EventEmitter<Device> = new EventEmitter<Device>();
  constructor() { }

  ngOnInit(): void {
  }


  handleEvent(item: Device) {
    this.deviceSelected.emit(item);
  }
}
