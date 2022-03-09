import { Component, Input, OnInit } from '@angular/core';
import { Device } from 'src/assets/device-model';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  @Input() devicesList: Device[];

  constructor() { }

  ngOnInit(): void {
  }

}
