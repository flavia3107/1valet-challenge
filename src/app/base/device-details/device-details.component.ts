import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { Device } from 'src/assets/device-model';


@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {
  columnNames: string[];
  type: ChartType = ChartType.ColumnChart;
  data = [];
  options = {
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true
  };

  width = 550;
  height = 400;


  @Input() selectedItem: Device;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.getColumns()
    this.mapDataForChart(changes['selectedItem'].currentValue.device_usage);
  }

  getColumns() {
    this.columnNames = Object.keys(this.selectedItem.device_usage[0]).map(col => col.replace(/_/g, ' '));
  }


  mapDataForChart(value) {
    this.data = [];
    value.forEach(val => {
      this.data.push(Object.values(val));
    });
  }

  ngOnDestroy() { }

}
